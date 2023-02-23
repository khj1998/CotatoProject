package cotato.controller;

import cotato.dto.board.AddPostDto;
import cotato.service.BoardService;
import cotato.vo.response.ApiResponse;
import cotato.dto.board.BoardDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    
    @GetMapping("/all")
    public ResponseEntity<ApiResponse> getAllPost() {
        List<BoardDto> result = boardService.findAllBoardPosts();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("GET ALL BOARD POSTS")
                .data(result)
                .build();
    }

    @GetMapping("/{postId}")
    public ResponseEntity<ApiResponse> getPost(@PathVariable Long postId) {
        log.info("{}",postId);
        BoardDto boardDto = boardService.findByBoardPostId(postId);
        log.info("{}",boardDto);
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("GET POST")
                .data(boardDto)
                .build();
    }

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addPost(@RequestBody AddPostDto addPostDto) {
        boardService.saveBoardPost(addPostDto);
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("Board Add Success")
                .data(addPostDto)
                .build();
    }

    @GetMapping("/user/posts")
    public ResponseEntity<ApiResponse> searchUserPost() {
        List<BoardDto> result = boardService.findPostByUserName();
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("Search Success")
                .data(result)
                .build();
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse> searchPost(@RequestParam("keyword") String keyword) {
        List<BoardDto> result =  boardService.findPostByKeyword(keyword);
        return new ApiResponse.ApiResponseBuilder<>(HttpStatus.OK)
                .success(true)
                .message("Search Success")
                .data(result)
                .build();
    }
}
