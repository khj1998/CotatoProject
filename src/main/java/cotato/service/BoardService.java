package cotato.service;

import cotato.dto.board.AddPostDto;
import cotato.vo.BoardResponse;

import java.util.List;

public interface BoardService {
    void saveBoardPost(AddPostDto addPostDto);
    List<BoardResponse> findPostByKeyword(String keyword);
}
