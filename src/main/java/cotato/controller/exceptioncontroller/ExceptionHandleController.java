package cotato.controller.exceptioncontroller;

import cotato.dto.UserDto;
import cotato.exception.*;
import cotato.vo.response.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ExceptionHandleController {

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ApiResponse> handleUserExistsException(@RequestBody UserDto userDto) {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("DUPLICATED")
                .build();
    }

    @ExceptionHandler(UserNotExistsException.class)
    public ResponseEntity<ApiResponse> handleUserNotExistsException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("USER NOT FOUND")
                .build();
    }

    @ExceptionHandler(UserPasswordInValidException.class)
    public ResponseEntity<ApiResponse> handleUserPasswordNotValidException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("PASSWORD INVALID")
                .build();
    }

    @ExceptionHandler(UserNotAuthenticated.class)
    public ResponseEntity<ApiResponse> handleUserNotAuthenticatedException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("USER NOT AUTHENTICATED")
                .build();
    }

    @ExceptionHandler(BoardPostDataInValid.class)
    public ResponseEntity<ApiResponse> handleBoardPostDataInValidException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("INVALID POST DATA")
                .build();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse> handleAnnotationException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("NOT VALID")
                .build();
    }
}
