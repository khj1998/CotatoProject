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

    private String startYear;

    private String startMonth;

    private String startDay;

    private String endYear;

    private String endMonth;

    private String endDay;
}
