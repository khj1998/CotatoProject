package cotato.vo;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Entity(name = "board_posts")
@EntityListeners(AuditingEntityListener.class)
public class BoardPostEntity {

    @Id
    @Column(name = "board_post_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardPostId;

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

    @OneToMany(cascade = CascadeType.ALL,
               mappedBy = "boardPostEntity")
    private List<BoardFileEntity> boardFiles = new ArrayList<>();
}
