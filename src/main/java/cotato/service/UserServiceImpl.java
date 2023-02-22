package cotato.service;

import cotato.config.AuthenticationStorage;
import cotato.dto.UserDto;
import cotato.dto.UserInfoDto;
import cotato.exception.*;
import cotato.repository.RoleRepository;
import cotato.repository.UserRepository;
import cotato.vo.Role;
import cotato.vo.ScoreEntity;
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
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationStorage authenticationStorage;

    @Override
    public UserDto saveUser(UserDto userDto) {
        if (userDto.getUsername().equals("admin@gmail.com")) {
            UserEntity admin = setRoleToAdmin(userDto);
            admin.setPassword(passwordEncoder.encode(userDto.getPassword()));
            admin.setScore(new ScoreEntity());
            admin.setNickname("ADMIN");
            userRepository.save(admin);
            log.info("admin 계정 , {}",admin.getRoles());
        }

        if (checkUserExists(userDto.getUsername())) {
            throw new UserAlreadyExistsException(String.format("User %s already exists", userDto.getUsername()));
        } else {
            UserEntity user = setRoleToUser(userDto);
            user.setPassword(passwordEncoder.encode(userDto.getPassword()));
            user.setScore(new ScoreEntity());
            userRepository.save(user);
        }

        return userDto;
    }

    @Override
    public UserInfoDto getUserInfo() {
        UserEntity user = userRepository.findByUsername(authenticationStorage.getAuthentication().getPrincipal().toString());
        ScoreEntity score = user.getScore();
        return UserInfoDto.builder()
                .userId(user.getId())
                .username(user.getUsername())
                .plus(score.getPlus())
                .minus(score.getMinus())
                .nickname(user.getNickname())
                .build();
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

    private UserEntity setRoleToAdmin(UserDto userDto) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        UserEntity admin = modelMapper.map(userDto, UserEntity.class);
        Role adminRole = roleRepository.findByName("ROLE_ADMIN");

        if (adminRole == null) {
            adminRole = createAdminRole();
        }

        admin.setRoles(Arrays.asList(adminRole));
        return admin;
    }

    private Role createRole() {
        Role role = new Role();
        role.setName("ROLE_USER");
        return roleRepository.save(role);
    }

    private Role createAdminRole() {
        Role role = new Role();
        role.setName("ROLE_ADMIN");
        return roleRepository.save(role);
    }

    @Override
    public void checkUserValid() {
        if (authenticationStorage.getAuthentication() == null) {
            throw new UserNotAuthenticated("인증되지 않은 유저입니다.");
        }
    }

    @Override
    public void checkAdmin() {
        UserEntity user = userRepository.findByUsername(authenticationStorage.getAuthentication().getPrincipal().toString());
        List<Role> roles = user.getRoles();
        for (Role role : roles) {
            if (role.getName().equals("ROLE_ADMIN")) {
                return;
            }
        }
        throw new UserNotAdminException("관리자만 접근 가능합니다.");
    }

    @Override
    public void setAuthentication() {
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        authenticationStorage.setAuthentication(authentication);
    }

    @Override
    public void logoutProcess() {
        if (authenticationStorage.getAuthentication() == null) {
            throw new UserAlreadyLogoutException("이미 로그아웃한 유저입니다.");
        }

        SecurityContextHolder.clearContext();
        authenticationStorage.setAuthentication(null);
    }

    @Override
    public void modifyUserPassword(UserInfoDto userInfoDto) {
        if (!userInfoDto.getPassword().equals(userInfoDto.getPasswordConfirm())) {
            throw new UserPasswordInValidException("패스워드 불일치!");
        }

        UserEntity user = userRepository.findByUsername(userInfoDto.getUsername());
        user.setPassword(passwordEncoder.encode(userInfoDto.getPassword()));
        userRepository.save(user);
    }
}
