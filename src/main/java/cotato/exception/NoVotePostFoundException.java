package cotato.exception;

public class NoVotePostFoundException extends RuntimeException {
    public NoVotePostFoundException(String message) {
        super(message);
    }
}
