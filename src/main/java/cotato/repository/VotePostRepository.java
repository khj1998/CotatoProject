package cotato.repository;

import cotato.vo.VotePost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VotePostRepository extends JpaRepository<VotePost, Long> {
    VotePost findByPostId(long postId);
}
