package cotato.service;

import cotato.dto.UserDto;
import cotato.exception.UserAlreadyExistsException;
import cotato.repository.RoleRepository;
import cotato.repository.UserRepository;
import cotato.vo.Role;
import cotato.vo.SignResponse;
import cotato.vo.UserEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Arrays;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDto saveUser(UserDto userDto) {
        if (checkUserExists(userDto.getUsername())) {
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

    @Override
    public void checkUserValid(String reqUserName, SignResponse res) {
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        String username = authentication.getName();
        
        /** 추후 API 유효성 검증시 사용 예정 */
    }
}
