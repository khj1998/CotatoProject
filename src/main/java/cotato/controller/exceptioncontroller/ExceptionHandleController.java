package cotato.controller.exceptioncontroller;

import cotato.exception.UserAlreadyExistsException;
import cotato.vo.SignUpResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ExceptionHandleController {

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<SignUpResponse> handleUserExistsError() {
        SignUpResponse res = new SignUpResponse();
        res.setMessage("DUPLICATED");
        return ResponseEntity.status(HttpStatus.OK)
                .body(res);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<SignUpResponse> handleAnnotationError() {
        SignUpResponse res = new SignUpResponse();
        res.setMessage("NOT VALID");
        return ResponseEntity.status(HttpStatus.OK)
                .body(res);
    }
}
