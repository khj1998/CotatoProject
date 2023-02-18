package cotato.service;

import cotato.dto.UserDto;

public interface UserService {
    UserDto saveUser(UserDto userDto);
    void checkUserValid();
    void logoutProcess();
    void setAuthentication();
}
