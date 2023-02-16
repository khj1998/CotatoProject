package cotato.controller;

import cotato.dto.CalendarPostDto;
import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.exception.UserNotFoundException;
import cotato.service.VoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
