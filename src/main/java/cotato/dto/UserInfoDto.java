package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserInfoDto {
    public Long userId;
    public String username;
    public int plus;
    public int minus;
    public String nickname;
    public String password;
    public String passwordConfirm;
    public String role;

    @Builder
    public UserInfoDto(Long userId,String username,int plus, int minus,String nickname,String role) {
        this.userId = userId;
        this.username = username;
        this.plus = plus;
        this.minus = minus;
        this.nickname = nickname;
        this.role = role;
    }
}
