package cotato.controller;

import cotato.dto.board.AddPostDto;
import cotato.service.BoardService;
import cotato.vo.BoardPostEntity;
import cotato.vo.BoardResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/add")
    public ResponseEntity addPost(@RequestBody AddPostDto addPostDto) {
        log.info("넘어와? {}",addPostDto);
        boardService.saveBoardPost(addPostDto);
        return ResponseEntity
                .status(HttpStatus.OK).body(addPostDto);
    }

    @GetMapping("/search")
    public ResponseEntity searchPost(@RequestParam("keyword") String keyword) {
        List<BoardResponse> postList =  boardService.findPostByKeyword(keyword);
        return ResponseEntity
                .status(HttpStatus.OK).body(postList);
    }
}
