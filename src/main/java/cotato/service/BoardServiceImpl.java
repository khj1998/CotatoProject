package cotato.service;

import cotato.config.AuthenticationStorage;
import cotato.dto.board.AddPostDto;
import cotato.exception.BoardPostNotFoundException;
import cotato.exception.UserNotAdminException;
import cotato.exception.UserNotAuthenticated;
import cotato.repository.BoardFileRepository;
import cotato.repository.BoardRepository;
import cotato.repository.UserRepository;
import cotato.vo.BoardFileEntity;
import cotato.vo.BoardPostEntity;
import cotato.dto.board.BoardDto;
import cotato.vo.Role;
import cotato.vo.UserEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {

    @Value("${file.upload.path}")
    private String filePath;
    private final BoardRepository boardRepository;
    private final BoardFileRepository boardFileRepository;
    private final UserRepository userRepository;
    private final AuthenticationStorage authenticationStorage;

    @Override
    public void saveBoardPost(AddPostDto addPostDto) {
        if (authenticationStorage.getAuthentication() == null) {
            throw new UserNotAuthenticated("인증되지 않은 유저입니다.");
        }

        if (addPostDto.getCategory().equals("공지사항")) {
            checkAdmin();
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
    public BoardDto findByBoardPostId(Long id) {
        Optional<BoardPostEntity> boardPostEntity = boardRepository.findById(id);
        boardPostEntity.orElseThrow(() -> new BoardPostNotFoundException("해당 글을 찾지 못했습니다."));
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        BoardDto boardDto = mapper.map(boardPostEntity.get(),BoardDto.class);
        boardDto.setNickname(boardPostEntity.get().getUserEntity().getNickname());
        return boardDto;
    }

    @Override
    public List<BoardDto> findAllBoardPosts() {
        List<BoardDto> result = new ArrayList<>();
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        List<BoardPostEntity> entities = boardRepository.findAll();

        for (BoardPostEntity boardPostEntity : entities) {
            BoardDto boardDto = mapper.map(boardPostEntity,BoardDto.class);
            result.add(boardDto);
        }
        return result;
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

    @Override
    public List<BoardDto> findPostByUserName() {
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        String username = authenticationStorage.getAuthentication().getPrincipal().toString();
        UserEntity user = userRepository.findByUsername(username);
        List<BoardPostEntity> posts = user.getBoardPosts();
        List<BoardDto> result = new ArrayList<>();

        posts.forEach(post -> {
            BoardDto boardDto = mapper.map(post,BoardDto.class);
            result.add(boardDto);
        });

        return result;
    }

    private void checkAdmin() {
        UserEntity user = userRepository.findByUsername(authenticationStorage.getAuthentication().getPrincipal().toString());
        List<Role> roles = user.getRoles();
        for (Role role : roles) {
            if (role.getName().equals("ROLE_ADMIN")) {
                return;
            }
        }
        throw new UserNotAdminException("관리자만 접근 가능합니다.");
    }

    private List<BoardFileEntity> getFilesList(List<MultipartFile> files, BoardPostEntity boardPostEntity) {
        List<BoardFileEntity> result = new ArrayList<>();
        files.stream().forEach(file -> {
            String originalFileName = file.getOriginalFilename();
            String serverFileName = UUID.randomUUID().toString() + originalFileName.substring(originalFileName.lastIndexOf("."));
            BoardFileEntity boardFileEntity = new BoardFileEntity();
            boardFileEntity.setOriginalFileName(originalFileName);
            boardFileEntity.setServerFileName(serverFileName);

            boardFileEntity.setBoardPostEntity(boardPostEntity);
            try {
                file.transferTo(new File(filePath));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            boardFileRepository.save(boardFileEntity);
            result.add(boardFileEntity);
        });

        return result;
    }
}
