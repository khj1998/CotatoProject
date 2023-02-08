package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import cotato.validator.PasswordConfirm;
import lombok.Data;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;

@Data
@PasswordConfirm
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDto {

    @NotBlank(message="아이디 입력은 필수입니다!")
    private String username;
    @NotBlank(message="패스워드 입력은 필수입니다!")
    private String password;
    private String passwordConfirm;
    @Nullable
    private String nickname;
    @Nullable
    private Integer generation;
}
