package cotato.service;

import cotato.dto.board.AddPostDto;
import cotato.dto.board.BoardDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface BoardService {
    void saveBoardPost(AddPostDto addPostDto, List<MultipartFile> files);
    List<BoardDto> findPostByKeyword(String keyword);
    List<BoardDto> findPostByUserName();
}
