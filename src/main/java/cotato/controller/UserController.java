package cotato.controller;

import cotato.dto.UserDto;
import cotato.exception.UserAlreadyExistsException;
import cotato.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/users/login")
    public ResponseEntity<UserDto> logIn(@RequestBody UserDto userDto) {
        log.info("user id : {}, password : {}",userDto.getUsername(),userDto.getPassword());

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userDto);
    }

    @PostMapping("/users/registration")
    public ResponseEntity<UserDto> register(@RequestBody @Valid UserDto userDto, BindingResult bindingResult) {

        log.info("user id : {}, password : {}",userDto.getUsername(),userDto.getPassword());

        if (bindingResult.hasErrors()){
            log.info("회원가입 정보가 유효하지 않습니다!");
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(userDto);
        }

        try {
            userService.saveUser(userDto);
        } catch(UserAlreadyExistsException e) {
            log.error("User already exists!!");
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(userDto);
        }

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userDto);
    }
}
