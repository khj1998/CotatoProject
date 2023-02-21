package cotato.controller;

import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.exception.PostNotFoundException;
import cotato.exception.UserNotFoundException;
import cotato.service.VoteService;
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

    @GetMapping("/cotato/vote")
    public ResponseEntity<List<VoteShowPostDto>> showAllVotePostList(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(voteService.showAllVotePostsWithVoteShowPostDto());
    }

    @PostMapping("/cotato/vote")
    ResponseEntity<VotePostDto> saveVotePost(@RequestBody VotePostDto votePostDto){
        if(!voteService.isUserExist(votePostDto.getAuthor().getId()))
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
    public ResponseEntity<String> vote(@PathVariable Long postId,
                                       @RequestParam(name = "userid") Long userId,
                                       @RequestParam(name = "attend") Boolean attend)
    {

        if(!voteService.isPostExist(postId))
            throw new PostNotFoundException(postId);

        if(!voteService.isUserExist(userId))
            throw new UserNotFoundException(userId);

        String respond = voteService.vote(postId, userId, attend);

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
