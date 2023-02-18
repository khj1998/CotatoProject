package cotato.controller;

import cotato.dto.ScoreDto;
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
    public void loginEntryPoint() {}

    @GetMapping("/users/logout")
    public ResponseEntity<ApiResponse> logout() {
        userService.logoutProcess();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("LOGOUT SUCCESS")
                .build();
    }

    @GetMapping("/users/score")
    public ResponseEntity<ApiResponse> getUserScore() {
        ScoreDto scoreDto = userService.getScore();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("GET SCORE")
                .data(scoreDto)
                .build();
    }

    @PostMapping("/users/modify")
    public ResponseEntity<ApiResponse> modifyUser() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("MODIFY SUCCESS")
                .build();
    }
}