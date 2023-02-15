package cotato.service;

import cotato.dto.LogInDto;
import cotato.dto.UserDto;
import cotato.vo.SignResponse;
import cotato.vo.ValidResponse;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {
    UserDto saveUser(UserDto userDto);
<<<<<<< HEAD
    void checkUserValid(ValidResponse res);
    void logoutProcess();
=======
    boolean checkUserValid(UserDto userDto);
>>>>>>> 6067c6c86cf9d3d9008c5ecf257b3d38e37c0778
}
