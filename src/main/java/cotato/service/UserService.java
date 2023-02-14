package cotato.service;

import cotato.dto.LogInDto;
import cotato.dto.UserDto;
import cotato.vo.SignResponse;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDto saveUser(UserDto userDto);
    void checkUserValid(String reqUserName, SignResponse res);
}
