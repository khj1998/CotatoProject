package cotato.controller;

import cotato.dto.LogInDto;
import cotato.dto.UserDto;
import cotato.service.UserService;
import cotato.vo.SignResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.Collection;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login/result")
    public ResponseEntity<SignResponse> loginResult(@RequestBody LogInDto logInDto) {

        SignResponse res = new SignResponse();
        userService.checkUserNameValid(logInDto.getUsername(),res);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(res);
    }

    @GetMapping("/users/login")
    public ResponseEntity loginSuccessEndPoint() {
        return ResponseEntity.ok().build();
    }

    @PostMapping("/users/login")
    public void login() {}

    @PostMapping("/users/registration")
    public ResponseEntity<SignResponse> register(@RequestBody @Valid UserDto userDto) {

        log.info("user id : {}, password : {}",userDto.getUsername(),userDto.getPassword());
        userService.saveUser(userDto);
        SignResponse res = new SignResponse();
        res.setMessage("REGISTRATION SUCCESS");

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(res);
    }
}
