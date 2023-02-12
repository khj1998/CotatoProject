package cotato.controller;

import cotato.dto.UserDto;
import cotato.service.UserService;
import cotato.vo.SignUpResponse;
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

    /*@PostMapping("/users/login")
    public ResponseEntity<UserDto> logIn(@RequestBody UserDto userDto, HttpServletRequest req) {

        HttpSession session = req.getSession(true);
        session.setAttribute(SessionConst.USER_SESSION,userDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userDto);
    }*/

    @GetMapping("/users/auth")
    public ResponseEntity<String> authCheck() {

        SecurityContext context = SecurityContextHolder.getContext();
        Authentication authentication = context.getAuthentication();
        String username = authentication.getName();
        Object principal = authentication.getPrincipal();
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        log.info("username : {}, principal : {}, authorities : {} , authenticated? : {}",
                username,principal,authorities,authentication.isAuthenticated());

        return ResponseEntity.status(HttpStatus.OK)
                .body("ok");
    }

    @PostMapping("/users/registration")
    public ResponseEntity<SignUpResponse> register(@RequestBody @Valid UserDto userDto) {

        log.info("user id : {}, password : {}",userDto.getUsername(),userDto.getPassword());
        userService.saveUser(userDto);
        SignUpResponse res = new SignUpResponse();
        res.setMessage("REGISTRATION SUCCESS");

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(res);
    }
}
