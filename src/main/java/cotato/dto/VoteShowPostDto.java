package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import cotato.vo.UserEntity;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonSerialize
public class VoteShowPostDto {

    private Long postId;

    private Long authorId;

    private String content;

    private String startYear;

    private String startMonth;

    private String startDay;

    private String endYear;

    private String endMonth;

    private String endDay;

    List<Long> participatedUsersId = new ArrayList<>();

    List<Long> notParticipatedUsersId = new ArrayList<>();
}