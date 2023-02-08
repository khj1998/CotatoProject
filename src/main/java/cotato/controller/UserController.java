package cotato.controller;

import cotato.dto.UserDto;
import cotato.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<UserDto> register(@RequestBody UserDto userDto) {

        log.info("user id : {}, password : {}",userDto.getUsername(),userDto.getPassword());
        //userService.saveUser(userDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userDto);
    }
}
