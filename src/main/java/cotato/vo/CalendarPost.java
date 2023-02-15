package cotato.vo;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "calendar_posts")
public class CalendarPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity author;

    @Column
    private String content;

    @Column
    private String startYear;

    @Column
    private String startMonth;

    @Column
    private String startDay;

    @Column
    private String endYear;

    @Column
    private String endMonth;

    @Column
    private String endDay;
}