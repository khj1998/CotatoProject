package cotato.repository;

import cotato.vo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String userName);
}
