package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ScoreDto {
    public int plus;
    public int minus;

    public ScoreDto(int plus, int minus) {
        this.plus = plus;
        this.minus = minus;
    }
}
