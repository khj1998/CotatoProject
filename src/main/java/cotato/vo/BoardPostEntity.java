package cotato.vo;
import cotato.vo.UserEntity;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity(name = "board_posts")
@EntityListeners(AuditingEntityListener.class)
public class BoardPostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardPostId;

    @Column
    private String postType;
    @Column
    private String category;
    @Column(nullable = false)
    private String title;
    @Column
    private String content;

    @Column(nullable = false)
    @CreatedDate
    private Date createdAt;

    @Column(nullable = true)
    @LastModifiedDate
    private Date updatedAt;

    @ManyToOne
    @ToString.Exclude
    @JoinColumn(name = "users_id")
    private UserEntity userEntity;
}
