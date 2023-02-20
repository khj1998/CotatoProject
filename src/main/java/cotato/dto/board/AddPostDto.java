package cotato.dto.board;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
@JsonPropertyOrder({"category","title","content"})
public class AddPostDto {
    public String category;
    public String title;
    public String content;
}
