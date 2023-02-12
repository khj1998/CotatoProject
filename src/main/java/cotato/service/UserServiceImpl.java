package cotato.service;

import cotato.dto.LogInDto;
import cotato.dto.UserDto;
import cotato.exception.UserAlreadyExistsException;
import cotato.exception.UserNotExistsException;
import cotato.exception.UserPasswordInValidException;
import cotato.repository.RoleRepository;
import cotato.repository.UserRepository;
import cotato.vo.Role;
import cotato.vo.UserEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Arrays;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserDetailsService userDetailsService;
    private final AuthenticationManager authenticationManager;

    @Override
    public UserDetails Login(LogInDto logInDto) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(logInDto.getUsername());

        log.info("pwd : {},encoded DB pwd : {}",logInDto.getPassword(),userDetails.getPassword());
        if (!passwordEncoder.matches(logInDto.getPassword(), userDetails.getPassword())) {
            throw new UserPasswordInValidException("User password not valid!");
        }

        /* 유효한 로그인 정보. SecurityContextHolder 에 authentication 객체 주입 */
        SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                userDetails.getUsername(),
                userDetails.getPassword(),
                userDetails.getAuthorities()
        );
        securityContext.setAuthentication(authentication);
        SecurityContextHolder.setContext(securityContext);

        return userDetails;
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        boolean isExists = checkUserExists(userDto.getUsername());

        if (isExists) {
            throw new UserAlreadyExistsException(String.format("User %s already exists", userDto.getUsername()));
        } else {
            UserEntity user = setRoleToUser(userDto);
            user.setPassword(passwordEncoder.encode(userDto.getPassword()));
            userRepository.save(user);
        }

        return userDto;
    }

    private boolean checkUserExists(String userName) {
        UserEntity user = userRepository.findByUsername(userName);
        return user!=null;
    }

    private UserEntity setRoleToUser(UserDto userDto) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserEntity user = modelMapper.map(userDto, UserEntity.class);
        Role role = roleRepository.findByName("ROLE_USER");

        if (role == null) {
            role = createRole();
        }

        user.setRoles(Arrays.asList(role));
        return user;
    }

    private Role createRole() {
        Role role = new Role();
        role.setName("ROLE_USER");
        return roleRepository.save(role);
    }
}
