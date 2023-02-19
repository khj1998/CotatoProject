package cotato.dto.board;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

@Data
@JsonPropertyOrder({"postType","category","title","content"})
public class AddPostDto {
    public String postType;
    public String category;
    public String title;
    public String content;
}
