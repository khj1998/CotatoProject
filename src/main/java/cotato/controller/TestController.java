package cotato.controller;

import cotato.dto.UserDto;
import cotato.repository.UserMemoryRepository;
import cotato.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TestController {

    private final UserMemoryRepository userMemoryRepository;

    @PostMapping("/test/signup")
    public ResponseEntity<UserDto> signUp(@RequestBody UserDto userDto) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userDto);
    }

    @GetMapping("/test/users/all")
    public void showAllUsers() {
        userMemoryRepository.getAllUsers();
    }
}
