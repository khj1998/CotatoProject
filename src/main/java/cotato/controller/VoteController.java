package cotato.controller;

import cotato.dto.VoteAddDto;
import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.exception.PostNotFoundException;
import cotato.exception.UserNotFoundException;
import cotato.service.UserService;
import cotato.service.VoteService;
import cotato.vo.VotePost;
import cotato.vo.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class VoteController {

    private final VoteService voteService;
    private final UserService userService;

    @GetMapping("/cotato/voate/all")
    public ResponseEntity<ApiResponse> findAllVotePost() {
        VotePost result = voteService.findVotePostById();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("FIND VOTE POST")
                .data(result)
                .build();
    }

    @GetMapping("/cotato/vote")
    public ResponseEntity<List<VoteShowPostDto>> showAllVotePostList(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(voteService.showAllVotePostsWithVoteShowPostDto());
    }

    @PostMapping("/cotato/vote")
    ResponseEntity<VotePostDto> saveVotePost(@RequestBody VotePostDto votePostDto,@RequestParam(name = "userid") String userId){
        userService.checkUserValid();
        userService.checkAdmin();

        Long userID = Long.valueOf(userId);
        if(!voteService.isUserExist(userID))
            throw new UserNotFoundException(votePostDto.getAuthor().getId());

        voteService.savePost(votePostDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(votePostDto);
    }

    @DeleteMapping("/cotato/vote")
    ResponseEntity<VotePostDto> deleteVotePost(@RequestBody VotePostDto votePostDto){

        if(!voteService.isPostExist(votePostDto.getPostId()))
            throw new PostNotFoundException(votePostDto.getPostId());

        voteService.deletePost(votePostDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(votePostDto);
    }

    @GetMapping("/cotato/vote/{postId}")
    public ResponseEntity<VoteShowPostDto> showVotePost(@PathVariable Long postId){

        if(!voteService.isPostExist(postId))
            throw new PostNotFoundException(postId);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(voteService.findVotePost(postId));
    }

    @PostMapping("/cotato/vote/{postId}")
    public ResponseEntity<String> vote(@PathVariable String postId,
                                       @RequestBody VoteAddDto voteAddDto)
    {
        Long postID = Long.valueOf(postId);
        Long userID = voteAddDto.getUserid();

        if(!voteService.isPostExist(postID))
            throw new PostNotFoundException(postID);

        if(!voteService.isUserExist(userID))
            throw new UserNotFoundException(userID);

        String respond = voteService.vote(postID, userID, voteAddDto.isAttend());

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(respond);
    }

    @DeleteMapping("/cotato/vote/{postId}")
    public ResponseEntity<String> cancelVote(@PathVariable Long postId,
                                             @RequestParam(name = "userid") Long userId){

        if(!voteService.isPostExist(postId))
            throw new PostNotFoundException(postId);

        if(!voteService.isUserExist(userId))
            throw new UserNotFoundException(userId);

        String respond = voteService.cancelVote(postId, userId);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(respond);
    }
}
