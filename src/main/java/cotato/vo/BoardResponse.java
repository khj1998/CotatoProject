package cotato.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import java.util.Date;

@Data
@JsonSerialize
public class BoardResponse {
    private String postType;
    private String category;
    private String title;
    private String content;

    private String createdAt;
    private String updatedAt;

}
