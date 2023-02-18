package cotato.service;

import cotato.config.AuthenticationStorage;
import cotato.dto.board.AddPostDto;
import cotato.exception.BoardPostDataInValid;
import cotato.exception.UserNotAuthenticated;
import cotato.repository.BoardRepository;
import cotato.repository.UserRepository;
import cotato.vo.BoardPostEntity;
import cotato.dto.board.BoardDto;
import cotato.vo.UserEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private final AuthenticationStorage authenticationStorage;

    @Override
    public void saveBoardPost(AddPostDto addPostDto) {
        if (authenticationStorage.getAuthentication() == null) {
            throw new UserNotAuthenticated("인증되지 않은 유저입니다.");
        }

        if (addPostDto.getPostType().isBlank() || addPostDto.getCategory().isBlank() || addPostDto.getTitle().isBlank()) {
            throw new BoardPostDataInValid("Board Post Data Invalid");
        }

        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        BoardPostEntity boardPostEntity = modelMapper.map(addPostDto,BoardPostEntity.class);
        UserEntity userEntity = userRepository.findByUsername(authenticationStorage.getAuthentication().getPrincipal().toString());
        boardPostEntity.setUserEntity(userEntity);
        userEntity.getBoardPosts().add(boardPostEntity);
        boardRepository.save(boardPostEntity);
        userRepository.save(userEntity);
    }

    @Override
    public List<BoardDto> findPostByKeyword(String keyword) {

        if (keyword.isBlank()) {
            return new ArrayList<>();
        }

        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        List<BoardPostEntity> posts = boardRepository.findByTitleContaining(keyword);
        List<BoardDto> result = new ArrayList<>();

       posts.forEach( post -> {
           BoardDto res = mapper.map(post, BoardDto.class);
           res.setCreatedAt(res.getCreatedAt().substring(0,10));
           res.setUpdatedAt(res.getUpdatedAt().substring(0,10));
           result.add(res);
       });

        return result;
    }
}
