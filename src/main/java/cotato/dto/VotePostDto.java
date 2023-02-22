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
public class VotePostDto {

    private Long postId;

    private UserEntity author;

    private String title;

    private String content;

    List<Long> participatedUsersId = new ArrayList<>();

    List<Long> notParticipatedUsersId = new ArrayList<>();
}