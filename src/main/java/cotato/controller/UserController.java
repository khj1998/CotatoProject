package cotato.controller;

import cotato.dto.UserDto;
import cotato.dto.UserInfoDto;
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

    @GetMapping("/users/role")
    public ResponseEntity<ApiResponse> getUserRole() {
        UserInfoDto userInfoDto = userService.getUserInfo();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("GET INFO")
                .data(userInfoDto)
                .build();
    }

    @GetMapping("/users/info")
    public ResponseEntity<ApiResponse> getUserScore() {
        UserInfoDto userInfoDto = userService.getUserInfo();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("GET USER INFO")
                .data(userInfoDto)
                .build();
    }

    @PostMapping("/users/modify/password")
    public ResponseEntity<ApiResponse> modifyUserPwd(@RequestBody UserInfoDto userInfoDto) {
        userService.modifyUserPassword(userInfoDto);
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("PASSWORD MODIFY SUCCESS")
                .data(userInfoDto)
                .build();
    }

    @PostMapping("/users/modify/info")
    public ResponseEntity<ApiResponse> modifyUserInfo(@RequestBody UserInfoDto userInfoDto) {
        userService.modifyUserInfo(userInfoDto);
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("INFO MODIFY SUCCESS")
                .data(userInfoDto)
                .build();
    }
}