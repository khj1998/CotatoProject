package cotato.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserInfoDto {
    public String username;
    public int plus;
    public int minus;
    public String nickname;
    public String password;
    public String passwordConfirm;

    @Builder
    public UserInfoDto(String username,int plus, int minus,String nickname) {
        this.username = username;
        this.plus = plus;
        this.minus = minus;
        this.nickname = nickname;
    }
}
