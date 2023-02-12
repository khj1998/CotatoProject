package cotato.service;

import cotato.dto.LogInDto;
import cotato.dto.UserDto;

public interface UserService {
    UserDto saveUser(UserDto userDto);
    String Login(LogInDto logInDto);
}
