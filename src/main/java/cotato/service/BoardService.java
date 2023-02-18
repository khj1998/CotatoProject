package cotato.service;

import cotato.dto.board.AddPostDto;
import cotato.dto.board.BoardDto;

import java.util.List;

public interface BoardService {
    void saveBoardPost(AddPostDto addPostDto);
    List<BoardDto> findPostByKeyword(String keyword);
}
