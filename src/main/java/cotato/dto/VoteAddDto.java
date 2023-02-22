package cotato.dto;

import lombok.Data;

@Data
public class VoteAddDto {
    public Long id;
    public Long userid;
    public boolean attend;
}
