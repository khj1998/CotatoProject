package cotato.service;

import cotato.dto.UserDto;
import cotato.exception.UserAlreadyExistsException;
import cotato.repository.RoleRepository;
import cotato.repository.UserRepository;
import cotato.vo.Role;
import cotato.vo.SignResponse;
import cotato.vo.UserEntity;
import cotato.vo.ValidResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
<<<<<<< HEAD
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
=======
>>>>>>> 6067c6c86cf9d3d9008c5ecf257b3d38e37c0778
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Arrays;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
<<<<<<< HEAD
    private final RoleRepository roleRepository;
=======
>>>>>>> 6067c6c86cf9d3d9008c5ecf257b3d38e37c0778
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDto saveUser(UserDto userDto) {
        if (checkUserExists(userDto.getUsername())) {
            throw new UserAlreadyExistsException(String.format("User %s already exists", userDto.getUsername()));
        } else {
<<<<<<< HEAD
            UserEntity user = setRoleToUser(userDto);
=======
            ModelMapper mapper = new ModelMapper();
            mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
            User user = mapper.map(userDto,User.class);
>>>>>>> 6067c6c86cf9d3d9008c5ecf257b3d38e37c0778
            user.setPassword(passwordEncoder.encode(userDto.getPassword()));
            userRepository.save(user);
        }

        return userDto;
    }

    @Override
    public boolean checkUserValid(UserDto userDto) {
        User user = userRepository.findByUsername(userDto.getUsername());

        if (user == null || !passwordEncoder.matches(userDto.getPassword(), user.getPassword())) {
            return false;
        }
        return true;
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
    public void checkUserValid(ValidResponse res) {
        SecurityContext context = SecurityContextHolder.getContext();
        log.info("context : {}",context);
        Authentication authentication = context.getAuthentication();
        
        /** 추후 API 유효성 검증시 사용 예정 */
        if (authentication.isAuthenticated()) {
            res.setStatus("AUTHORIZED");
            res.setMessage("인증된 유저입니다.");
        } else {
            res.setStatus("UNAUTHORIZED");
            res.setMessage("인증되지 않은 유저입니다.");
        }
    }

    @Override
    public void logoutProcess() {
        SecurityContextHolder.clearContext();
        SecurityContext context = SecurityContextHolder.getContext();
        log.info("context : {}",context);
    }
}
