package cotato.repository;

import cotato.vo.VotePostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VotePostRepository extends JpaRepository<VotePostEntity, Long> {
    VotePostEntity findByPostId(long postId);
}
