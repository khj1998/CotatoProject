package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CalendarShowUserDto {

    private Long postId;

    private Long authorId;

    private String content;

    private Long startYear;

    private Long startMonth;

    private Long startDay;

    private Long endYear;

    private Long endMonth;

    private Long endDay;
}
