package cotato.service;

import cotato.dto.VotePostDto;
import cotato.dto.VoteShowPostDto;
import cotato.exception.NoVotePostFoundException;
import cotato.repository.UserRepository;
import cotato.repository.VotePostRepository;
import cotato.dto.VoteParticipantDto;
import cotato.vo.VotePostEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class VoteServiceImpl implements VoteService{

    private final VotePostRepository votePostRepository;
    private final UserRepository userRepository;

    @Override
    public VotePostEntity findVotePostById() {
        VotePostEntity post = votePostRepository.findByPostId(1L);
        if (post == null) {
            throw new NoVotePostFoundException("등록된 투표가 없습니다.");
        }
        return post;
    }

    @Override
    public List<VoteShowPostDto> showAllVotePostsWithVoteShowPostDto() {
        List<VotePostEntity> votePostEntityList = votePostRepository.findAll();
        List<VoteShowPostDto> voteShowPostDtoList = new ArrayList<>();

        ModelMapper modelMapper = new ModelMapper();

        for (VotePostEntity votePostEntity : votePostEntityList) {
            VoteShowPostDto voteShowPostDto = modelMapper.map(votePostEntity, VoteShowPostDto.class);
            voteShowPostDto.setAuthorId(votePostEntity.getAuthor().getId());

            //VotePost에 UserEntity로 저장되어 있기 때문에 id만 추출해서 프론트로 전달
            for(Long userEntity : votePostEntity.getParticipatedUsers())
                voteShowPostDto.getParticipatedUsersId().add(userEntity);

            for(Long userEntity : votePostEntity.getNotParticipatedUsers())
                voteShowPostDto.getNotParticipatedUsersId().add(userEntity);

            voteShowPostDtoList.add(voteShowPostDto);
        }

        return voteShowPostDtoList;
    }

    @Override
    public VoteShowPostDto findVotePost(Long postId) {
        ModelMapper modelMapper = new ModelMapper();

        VotePostEntity votePostEntity = votePostRepository.findById(postId).get();

        VoteShowPostDto voteShowPostDto = modelMapper.map(votePostEntity, VoteShowPostDto.class);

        for(Long userEntity : votePostEntity.getParticipatedUsers())
            voteShowPostDto.getParticipatedUsersId().add(userEntity);

        for(Long userEntity : votePostEntity.getNotParticipatedUsers())
            voteShowPostDto.getNotParticipatedUsersId().add(userEntity);

        return voteShowPostDto;
    }

    @Override
    public VotePostDto savePost(VotePostDto votePostDto) {
        ModelMapper modelMapper = new ModelMapper();

        VotePostEntity votePostEntity = modelMapper.map(votePostDto, VotePostEntity.class);

        votePostRepository.save(votePostEntity);

        return votePostDto;
    }

    @Override
    public VotePostDto deletePost(VotePostDto votePostDto) {
        ModelMapper modelMapper = new ModelMapper();

        VotePostEntity calendarPost = modelMapper.map(votePostDto, VotePostEntity.class);

        votePostRepository.delete(calendarPost);

        return votePostDto;
    }

    @Override
    public List<Long> showAllAttendUsers(Long postId) {
        Optional<VotePostEntity> votePost = votePostRepository.findById(postId);

        List<Long> attendList = new ArrayList<>();

        for(Long votePostAttend : votePost.get().getParticipatedUsers())
            attendList.add(votePostAttend);

        return attendList;
    }

    @Override
    public List<Long> showAllNotAttendUsers(Long postId) {
        Optional<VotePostEntity> votePost = votePostRepository.findById(postId);

        List<Long> notAttendList = new ArrayList<>();

        for(Long votePostNotAttend : votePost.get().getNotParticipatedUsers())
            notAttendList.add(votePostNotAttend);

        return notAttendList;
    }

    @Override
    public VoteParticipantDto getParticipant(Long postId) {
        VotePostEntity votePostEntity = votePostRepository.findById(postId).get();
        return VoteParticipantDto.builder()
                .offlineNum(votePostEntity.getParticipatedUsers().size())
                .onlineNum(votePostEntity.getNotParticipatedUsers().size())
                .build();
    }

    //isAttend가 true이면 참석으로 투표
    @Override
    public String vote(Long postId, Long userId, Boolean isAttend) {
        VotePostEntity votePostEntity = votePostRepository.findById(postId).get();
        //참석에 투표
        if(isAttend){
            List<Long> attendList = votePostEntity.getParticipatedUsers();

            //이미 참석에 투표한 경우
            for(Long user : attendList)
                if(userId.equals(user))
                    return "이미 참석에 투표하셨습니다.";

            List<Long> notAttendList = votePostEntity.getNotParticipatedUsers();

            //이미 불참에 투표한 경우
            for(Long user : notAttendList) {
                if (userId.equals(user)){
                    votePostEntity.getNotParticipatedUsers().remove(user);
                    votePostEntity.getParticipatedUsers().add(user);

                    votePostRepository.save(votePostEntity);

                    return "참석으로 투표를 변경하셨습니다.";
                }
            }
        }

        //불참에 투표
        if(!isAttend){
            List<Long> notAttendList = votePostEntity.getNotParticipatedUsers();

            //이미 불참에 투표한 경우
            for(Long user : notAttendList)
                if(userId.equals(user))
                    return "이미 불참에 투표하셨습니다.";

            List<Long> attendList = votePostEntity.getParticipatedUsers();

            //이미 불참에 투표한 경우
            for(Long user : attendList) {
                if (userId.equals(user)){
                    votePostEntity.getParticipatedUsers().remove(user);
                    votePostEntity.getNotParticipatedUsers().add(user);

                    votePostRepository.save(votePostEntity);

                    return "불참으로 투표를 변경하셨습니다.";
                }
            }
        }

        //이전에 투표를 하지 않은 경우
        if(isAttend)
            votePostEntity.getParticipatedUsers().add(userId);
        else
            votePostEntity.getNotParticipatedUsers().add(userId);

        votePostRepository.save(votePostEntity);

        return "투표를 완료하였습니다.";
    }

    @Override
    public String cancelVote(Long postId, Long userId) {

        VotePostEntity votePostEntity = votePostRepository.findById(postId).get();

        List<Long> attendList = votePostEntity.getParticipatedUsers();
        List<Long> notAttendList = votePostEntity.getNotParticipatedUsers();

        for(Long user : attendList){
            if(user.equals(userId)){
                votePostEntity.getParticipatedUsers().remove(user);

                votePostRepository.save(votePostEntity);
                return "정상적으로 참가 투표가 취소되셨습니다.";
            }
        }
        for(Long user : notAttendList){
            if(user.equals(userId)){
                votePostEntity.getNotParticipatedUsers().remove(user);

                votePostRepository.save(votePostEntity);
                return "정상적으로 불참 투표가 취소되셨습니다.";
            }
        }

        return "아직 투표하지 않으셨습니다.";
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
