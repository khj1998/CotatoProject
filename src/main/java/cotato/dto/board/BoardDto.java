package cotato.dto.board;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;

@Data
@JsonSerialize
public class BoardDto {
    private String postType;
    private String category;
    private String title;
    private String content;

    private String createdAt;
    private String updatedAt;
}
