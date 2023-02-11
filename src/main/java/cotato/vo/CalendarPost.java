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
    @JoinColumn(name = "USER_ID", referencedColumnName = "id")
    private User author;

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
}