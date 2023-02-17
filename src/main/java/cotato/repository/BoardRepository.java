package cotato.repository;

import cotato.vo.BoardPostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<BoardPostEntity,Long> {
    BoardPostEntity findByTitle(String title);
    BoardPostEntity findByCategory(String category);
    List<BoardPostEntity> findByTitleContaining(String title);
}
