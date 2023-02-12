package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import cotato.vo.User;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CalendarPostDto {

    private Long postId;

    private User author;

    private String content;

    private Long startYear;

    private Long startMonth;

    private Long startDay;

    private Long endYear;

    private Long endMonth;

    private Long endDay;
}
