package cotato.controller.exceptioncontroller;

import cotato.exception.*;
import cotato.vo.SignResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ExceptionHandleController {
    SignResponse res = new SignResponse();

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<SignResponse> handleUserExistsException() {
        res.setMessage("DUPLICATED");
        return ResponseEntity.status(HttpStatus.OK)
                .body(res);
    }

    @ExceptionHandler(UserNotExistsException.class)
    public ResponseEntity<SignResponse> handleUserNotExistsException() {
        res.setMessage("USER NOT FOUND");
        return ResponseEntity.status(HttpStatus.OK)
                .body(res);
    }

    @ExceptionHandler(UserPasswordInValidException.class)
    public ResponseEntity<SignResponse> handleUserPasswordNotValidException() {
        res.setMessage("PASSWORD INVALID");
        return ResponseEntity.status(HttpStatus.OK)
                .body(res);
    }

    @ExceptionHandler(UserNotAuthenticated.class)
    public ResponseEntity handleUserNotAuthenticatedException() {
        return ResponseEntity.status(HttpStatus.OK)
                .body("User Not Authenticated");
    }

    @ExceptionHandler(BoardPostDataInValid.class)
    public ResponseEntity handleBoardPostDataInValidException() {
        return ResponseEntity.status(HttpStatus.OK)
                .build();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<SignResponse> handleAnnotationException() {
        res.setMessage("NOT VALID");
        return ResponseEntity.status(HttpStatus.OK)
                .body(res);
    }
}
