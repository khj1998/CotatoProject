package cotato.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LogInDto {
    @NotBlank(message="아이디 입력은 필수입니다!")
    public String username;
    @NotBlank(message="패스워드 입력은 필수입니다!")
    public String password;
}
