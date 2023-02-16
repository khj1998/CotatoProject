package cotato.service;

import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.repository.UserRepository;
import cotato.repository.VotePostRepository;
import cotato.vo.CalendarPost;
import cotato.vo.UserEntity;
import cotato.vo.VotePost;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VoteServiceImpl implements VoteService{

    private final VotePostRepository votePostRepository;
    private final UserRepository userRepository;

    @Override
    public List<VoteShowPostDto> showAllVotePostsWithVoteShowPostDto() {
        List<VotePost> votePostList = votePostRepository.findAll();
        List<VoteShowPostDto> voteShowPostDtoList = new ArrayList<>();

        ModelMapper modelMapper = new ModelMapper();

        for (VotePost votePost : votePostList) {
            VoteShowPostDto voteShowPostDto = modelMapper.map(votePost, VoteShowPostDto.class);
            voteShowPostDto.setAuthorId(votePost.getAuthor().getId());

            //VotePost에 UserEntity로 저장되어 있기 때문에 id만 추출해서 프론트로 전달
            for(UserEntity userEntity : votePost.getParticipatedUsers())
                voteShowPostDto.getParticipatedUsersId().add(userEntity.getId());

            for(UserEntity userEntity : votePost.getNotParticipatedUsers())
                voteShowPostDto.getNotParticipatedUsersId().add(userEntity.getId());

            voteShowPostDtoList.add(voteShowPostDto);
        }

        return voteShowPostDtoList;
    }

    @Override
    public VoteShowPostDto findVotePost(Long postId) {
        ModelMapper modelMapper = new ModelMapper();

        VotePost votePost = votePostRepository.findById(postId).get();

        VoteShowPostDto voteShowPostDto = modelMapper.map(votePost, VoteShowPostDto.class);

        for(UserEntity userEntity : votePost.getParticipatedUsers())
            voteShowPostDto.getParticipatedUsersId().add(userEntity.getId());

        for(UserEntity userEntity : votePost.getNotParticipatedUsers())
            voteShowPostDto.getNotParticipatedUsersId().add(userEntity.getId());

        return voteShowPostDto;
    }

    @Override
    public VotePostDto savePost(VotePostDto votePostDto) {
        ModelMapper modelMapper = new ModelMapper();

        VotePost votePost = modelMapper.map(votePostDto, VotePost.class);

        votePostRepository.save(votePost);

        return votePostDto;
    }

    @Override
    public VotePostDto deletePost(VotePostDto votePostDto) {
        ModelMapper modelMapper = new ModelMapper();

        VotePost calendarPost = modelMapper.map(votePostDto, VotePost.class);

        votePostRepository.delete(calendarPost);

        return votePostDto;
    }

    @Override
    public List<Long> showAllAttendUsers(Long postId) {
        Optional<VotePost> votePost = votePostRepository.findById(postId);

        List<Long> attendList = new ArrayList<>();

        for(UserEntity votePostAttend : votePost.get().getParticipatedUsers())
            attendList.add(votePostAttend.getId());

        return attendList;
    }

    @Override
    public List<Long> showAllNotAttendUsers(Long postId) {
        Optional<VotePost> votePost = votePostRepository.findById(postId);

        List<Long> notAttendList = new ArrayList<>();

        for(UserEntity votePostNotAttend : votePost.get().getNotParticipatedUsers())
            notAttendList.add(votePostNotAttend.getId());

        return notAttendList;
    }

    @Override
    public UserEntity vote(Long postId, Long userId, Boolean isAttend) {
        return null;
    }

    @Override
    public UserEntity cancelVote(Long votePostId, Long userId) {
        return null;
    }

    @Override
    public Boolean isUserExist(Long id) {
        return userRepository.findById(id).isPresent();
    }

    @Override
    public Boolean isPostExist(Long postId) {
        return votePostRepository.findById(postId).isPresent();
    }
}
