package cotato.exception;

public class UserAlreadyLogoutException extends RuntimeException{
    public UserAlreadyLogoutException(String message) {
        super(message);
    }
}
