package cotato.dto;
import lombok.Builder;
import lombok.Setter;

@Setter
public class VoteParticipantDto {
    public int offlineNum;
    public int onlineNum;

    @Builder
    public VoteParticipantDto(int offlineNum, int onlineNum) {
        this.offlineNum = offlineNum;
        this.onlineNum = onlineNum;
    }
}
