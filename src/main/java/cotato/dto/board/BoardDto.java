package cotato.dto.board;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Builder;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BoardDto {
    public Long board_post_id;
    public String nickname;
    public String category;
    public String title;
    public String content;

    public String createdAt;
    public String updatedAt;

    @Builder
    public BoardDto(String nickname) {
        this.nickname = nickname;
    }
}
