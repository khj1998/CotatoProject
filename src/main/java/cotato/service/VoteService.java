package cotato.service;

import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.dto.VoteParticipantDto;
import cotato.vo.VotePostEntity;

import java.util.List;

public interface VoteService {
    VotePostEntity findVotePostById();
    List<VoteShowPostDto> showAllVotePostsWithVoteShowPostDto();

    VoteShowPostDto findVotePost(Long postId);

    VotePostDto savePost(VotePostDto votePostDto);

    VotePostDto deletePost(VotePostDto votePostDto);

    //추후 게시글에 유저들의 목록만 필요할 경우 사용(아래의 2개 메소드)
    List<Long> showAllAttendUsers(Long postId);

    List<Long> showAllNotAttendUsers(Long postId);

    String vote(Long postId, Long userId, Boolean isAttend);

    String cancelVote(Long postId, Long userId);

    Boolean isUserExist(Long id);

    Boolean isPostExist(Long postId);
    VoteParticipantDto getParticipant(Long postId);
}