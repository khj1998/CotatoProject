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
    private String content;

    @Column
    private Long startYear;

    @Column
    private Long startMonth;

    @Column
    private Long startDay;

    @Column
    private Long endYear;

    @Column
    private Long endMonth;

    @Column
    private Long endDay;

    @OneToMany(cascade = CascadeType.REMOVE)
    List<UserEntity> participatedUsers = new ArrayList<>();

    @OneToMany(cascade = CascadeType.REMOVE)
    List<UserEntity> notParticipatedUsers = new ArrayList<>();
}
