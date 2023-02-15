package cotato.exception;

public class UserPasswordInValidException extends RuntimeException{
    public UserPasswordInValidException(String message) {
        super(message);
    }
}
