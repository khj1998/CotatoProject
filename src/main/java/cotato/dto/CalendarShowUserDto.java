package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonSerialize
public class CalendarShowUserDto {

    private Long postId;

    private Long authorId;

    private String content;

    private String startYear;

    private String startMonth;

    private String startDay;

    private String endYear;

    private String endMonth;

    private String endDay;
}
