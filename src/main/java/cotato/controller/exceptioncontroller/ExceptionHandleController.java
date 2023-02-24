package cotato.controller.exceptioncontroller;

import cotato.exception.*;
import cotato.vo.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

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

    @ExceptionHandler(NoVotePostFoundException.class)
    public ResponseEntity<ApiResponse> handleNoVotePostFoundException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("NO VOTE POST FOUND")
                .build();
    }

    @ExceptionHandler(UserSameNickNameException.class)
    public ResponseEntity<ApiResponse> handleUserSameNickNameException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("NICKNAME ALREADY USED")
                .build();
    }

    @ExceptionHandler(UserSamePasswordException.class)
    public ResponseEntity<ApiResponse> handleUserSamePasswordException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("PASSWORD ALREADY USED")
                .build();
    }

    @ExceptionHandler(BoardPostNotFoundException.class)
    public ResponseEntity<ApiResponse> handleBoardPostNotFoundException() {
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(false)
                .message("BOARD POST NOT FOUND")
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

    @ExceptionHandler(DateInversionException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> dateInversionHandler(DateInversionException exception){

        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("errorMessage", exception.getMessage());

        return errorMap;
    }
}
