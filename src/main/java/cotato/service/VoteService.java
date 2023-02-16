package cotato.service;

import cotato.dto.CalendarShowUserDto;
import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.vo.UserEntity;

import java.util.List;

public interface VoteService {

    List<VoteShowPostDto> showAllVotePostsWithVoteShowPostDto();

    VotePostDto savePost(VotePostDto votePostDto);

    VotePostDto deletePost(VotePostDto votePostDto);

    List<Long> showAllAttendUsers();

    List<Long> showAllNotAttendUsers();

    UserEntity vote(Long votePostId, Long userId, Boolean isAttend);

    UserEntity cancelVote(Long votePostId, Long userId);

    Boolean isUserExist(Long id);

    Boolean isPostExist(Long postId);
}