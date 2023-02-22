package cotato.controller.exceptioncontroller;

import cotato.exception.*;
import cotato.vo.response.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestControllerAdvice
public class ExceptionHandleController {

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ApiResponse> handleUserExistsException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("DUPLICATED")
                .build();
    }

    @ExceptionHandler(UserAlreadyLogoutException.class)
    public ResponseEntity<ApiResponse> handleUserAlreadyLogoutException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("USER ALREADY LOGGED OUT")
                .build();
    }

    @ExceptionHandler(UserNotExistsException.class)
    public ResponseEntity<ApiResponse> handleUserNotExistsException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("USER NOT FOUND")
                .build();
    }

    @ExceptionHandler(UserPasswordInValidException.class)
    public ResponseEntity<ApiResponse> handleUserPasswordNotValidException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("PASSWORD INVALID")
                .build();
    }

    @ExceptionHandler(UserNotAuthenticated.class)
    public ResponseEntity<ApiResponse> handleUserNotAuthenticatedException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("USER NOT AUTHENTICATED")
                .build();
    }

    @ExceptionHandler(BoardPostDataInValidException.class)
    public ResponseEntity<ApiResponse> handleBoardPostDataInValidException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("INVALID POST DATA")
                .build();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse> handleAnnotationException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("NOT VALID")
                .build();
    }

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> userExceptionHandler(UserNotFoundException exception){

        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }

    @ExceptionHandler(PostNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> postExceptionHandler(PostNotFoundException exception){

        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }

    @ExceptionHandler(UserNotAdminException.class)
    public ResponseEntity<ApiResponse> userNotAdminExceptionHandler(UserNotAdminException exception) {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("NOT ADMIN")
                .build();
    }
}
