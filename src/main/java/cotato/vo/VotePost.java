package cotato.vo;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity(name = "vote_posts")
public class VotePost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity author;

    @Column
    private String title;

    @Column
    private String content;

    @ElementCollection
    @CollectionTable
    List<Long> participatedUsers = new ArrayList<>();

    @ElementCollection
    @CollectionTable
    List<Long> notParticipatedUsers = new ArrayList<>();
}
