package cotato.exception;

public class PostNotFoundException extends RuntimeException{

    public PostNotFoundException(Long postId){
        super("Could Not found the post with postId : " + postId);
    }
}
