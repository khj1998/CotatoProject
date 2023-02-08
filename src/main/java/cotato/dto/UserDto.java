package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDto {
    @NotBlank
    private String userId;
    @NotBlank
    private String password;
    @Nullable
    private String nickname;
    @Nullable
    private Integer generation;
}
