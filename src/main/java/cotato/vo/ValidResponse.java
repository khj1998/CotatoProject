package cotato.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;

@Data
@JsonSerialize
public class ValidResponse {
    String status;
    String message;
}