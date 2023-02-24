package cotato.exception;

public class BoardPostNotFoundException extends RuntimeException{
    public BoardPostNotFoundException(String message) {
        super(message);
    }
}
