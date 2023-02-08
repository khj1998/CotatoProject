package cotato.controller;

import cotato.dto.UserDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class UserController {

    @PostMapping("/users/signup")
    public ResponseEntity<UserDto> signUp(@RequestBody UserDto userDto) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userDto);
    }
}
