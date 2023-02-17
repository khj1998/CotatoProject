package cotato.service;

import cotato.dto.LogInDto;
import cotato.dto.UserDto;
import cotato.vo.SignResponse;
import cotato.vo.ValidResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDto saveUser(UserDto userDto);
    void checkUserValid(ValidResponse res);
    void logoutProcess();
    void setAuthentication();
}
