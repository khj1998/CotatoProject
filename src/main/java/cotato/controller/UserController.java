package cotato.controller;

import cotato.dto.UserDto;
import cotato.service.UserService;
import cotato.vo.response.ApiResponse;
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

    @GetMapping("/login/result")
    public ResponseEntity<ApiResponse> loginResult() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("LOGIN SUCCESS")
                .build();
    }

    @PostMapping("/users/registration")
    public ResponseEntity<ApiResponse> register(@RequestBody @Valid UserDto userDto) {
        userService.saveUser(userDto);
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("REGISTRATION SUCCESS")
                .data(userDto)
                .build();
    }

    @GetMapping("/user/valid")
    public ResponseEntity<ApiResponse> checkUserValid() {
        userService.checkUserValid();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("AUTHENTICATED")
                .build();
    }

    @GetMapping("/users/login")
    public ResponseEntity<ApiResponse> loginSuccessEndPoint() {
        userService.setAuthentication();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("LOGIN SUCCESS")
                .build();
    }

    @PostMapping("/users/login")
    public void login() {}

    @GetMapping("/users/logout")
    public void logout() {
        userService.logoutProcess();
    }
}