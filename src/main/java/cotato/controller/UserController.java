package cotato.controller;

import cotato.dto.LogInDto;
import cotato.dto.UserDto;
import cotato.service.UserService;
import cotato.vo.SignResponse;
import cotato.vo.ValidResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login/result")
    public ResponseEntity<SignResponse> loginResult(@RequestBody LogInDto logInDto) {
        SignResponse res = new SignResponse();
        res.setMessage("LOGIN SUCCESS");

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(res);
    }

    @GetMapping("/users/login")
    public void loginSuccessEndPoint() {}

    @PostMapping("/users/login")
    public void login() {}

    @GetMapping("/users/logout")
    public void logout() {
        userService.logoutProcess();
    }

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

    @GetMapping("/validation/test")
    public ResponseEntity<ValidResponse> sendValidResponse() {
        ValidResponse res = new ValidResponse();
        userService.checkUserValid(res);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(res);
    }
}
