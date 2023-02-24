package cotato.exception;

public class UserSamePasswordException extends RuntimeException{
    public UserSamePasswordException(String message) {
        super(message);
    }
}
