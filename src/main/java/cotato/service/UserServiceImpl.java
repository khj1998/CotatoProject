package cotato.service;

import cotato.dto.UserDto;
import cotato.repository.UserRepository;
import cotato.vo.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public UserDto saveUser(UserDto userDto) {
        return userDto;
    }

    
}
