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
    public List<Long> showAllAttendUsers() {
        return null;
    }

    @Override
    public List<Long> showAllNotAttendUsers() {
        return null;
    }

    @Override
    public UserEntity vote(Long votePostId, Long userId, Boolean isAttend) {
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
