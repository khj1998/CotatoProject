package cotato.controller;

import cotato.dto.CalendarPostDto;
import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.exception.PostNotFoundException;
import cotato.exception.UserNotFoundException;
import cotato.service.VoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
