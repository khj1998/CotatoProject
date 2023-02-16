package cotato.service;

import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.repository.UserRepository;
import cotato.repository.VotePostRepository;
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
            for(Long userEntity : votePost.getParticipatedUsers())
                voteShowPostDto.getParticipatedUsersId().add(userEntity);

            for(Long userEntity : votePost.getNotParticipatedUsers())
                voteShowPostDto.getNotParticipatedUsersId().add(userEntity);

            voteShowPostDtoList.add(voteShowPostDto);
        }

        return voteShowPostDtoList;
    }

    @Override
    public VoteShowPostDto findVotePost(Long postId) {
        ModelMapper modelMapper = new ModelMapper();

        VotePost votePost = votePostRepository.findById(postId).get();

        VoteShowPostDto voteShowPostDto = modelMapper.map(votePost, VoteShowPostDto.class);

        for(Long userEntity : votePost.getParticipatedUsers())
            voteShowPostDto.getParticipatedUsersId().add(userEntity);

        for(Long userEntity : votePost.getNotParticipatedUsers())
            voteShowPostDto.getNotParticipatedUsersId().add(userEntity);

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

        for(Long votePostAttend : votePost.get().getParticipatedUsers())
            attendList.add(votePostAttend);

        return attendList;
    }

    @Override
    public List<Long> showAllNotAttendUsers(Long postId) {
        Optional<VotePost> votePost = votePostRepository.findById(postId);

        List<Long> notAttendList = new ArrayList<>();

        for(Long votePostNotAttend : votePost.get().getNotParticipatedUsers())
            notAttendList.add(votePostNotAttend);

        return notAttendList;
    }

    //isAttend가 true이면 참석으로 투표
    @Override
    public String vote(Long postId, Long userId, Boolean isAttend) {
        VotePost votePost = votePostRepository.findById(postId).get();

        //참석에 투표
        if(isAttend){
            List<Long> attendList = votePost.getParticipatedUsers();

            //이미 참석에 투표한 경우
            for(Long user : attendList)
                if(userId.equals(user))
                    return "이미 참석에 투표하셨습니다.";

            List<Long> notAttendList = votePost.getNotParticipatedUsers();

            //이미 불참에 투표한 경우
            for(Long user : notAttendList) {
                if (userId.equals(user)){
                    votePost.getNotParticipatedUsers().remove(user);
                    votePost.getParticipatedUsers().add(user);

                    votePostRepository.save(votePost);

                    return "참석으로 투표를 변경하셨습니다.";
                }
            }
        }

        //불참에 투표
        if(!isAttend){
            List<Long> notAttendList = votePost.getNotParticipatedUsers();

            //이미 불참에 투표한 경우
            for(Long user : notAttendList)
                if(userId.equals(user))
                    return "이미 불참에 투표하셨습니다.";

            List<Long> attendList = votePost.getParticipatedUsers();

            //이미 불참에 투표한 경우
            for(Long user : attendList) {
                if (userId.equals(user)){
                    votePost.getParticipatedUsers().remove(user);
                    votePost.getNotParticipatedUsers().add(user);

                    votePostRepository.save(votePost);

                    return "불참으로 투표를 변경하셨습니다.";
                }
            }
        }

        //이전에 투표를 하지 않은 경우
        if(isAttend)
            votePost.getParticipatedUsers().add(userId);
        else
            votePost.getNotParticipatedUsers().add(userId);

        votePostRepository.save(votePost);

        return "투표를 완료하였습니다.";
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
