package cotato.exception;

public class UserSameNickNameException extends RuntimeException{
    public UserSameNickNameException(String message) {
        super(message);
    }
}
