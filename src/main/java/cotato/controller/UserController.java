package cotato.controller;

import cotato.config.SessionConst;
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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/users/login")
    public ResponseEntity<UserDto> logIn(@RequestBody UserDto userDto, HttpServletRequest req) {
        boolean isUserValid = userService.checkUserValid(userDto);
        log.info ("로그인 성공 여부 : {}",isUserValid);

        HttpSession session = req.getSession(true);
        session.setAttribute(SessionConst.USER_SESSION,userDto);

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
