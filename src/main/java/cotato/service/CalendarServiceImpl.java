package cotato.service;

import cotato.dto.CalendarPostDto;
import cotato.repository.CalendarPostRepository;
import cotato.repository.UserRepository;
import cotato.vo.CalendarPost;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CalendarServiceImpl implements CalendarService{

    private final CalendarPostRepository calendarPostRepository;
    private final UserRepository userRepository;

    @Override
    public List<CalendarPostDto> showAllPostsWithCalendarPostDto() {
        List<CalendarPost> calendarPostList = calendarPostRepository.findAll();
        List<CalendarPostDto> calendarPostDtoList = new ArrayList<>();

        ModelMapper modelMapper = new ModelMapper();

        for (CalendarPost calendarPost : calendarPostList) {
            CalendarPostDto calendarPostDto = modelMapper.map(calendarPost, CalendarPostDto.class);

            calendarPostDtoList.add(calendarPostDto);
        }

        return calendarPostDtoList;
    }

    @Override
    public CalendarPostDto savePost(CalendarPostDto calendarPostDto) {
        ModelMapper modelMapper = new ModelMapper();

        CalendarPost calendarPost = modelMapper.map(calendarPostDto, CalendarPost.class);

        calendarPostRepository.save(calendarPost);

        return calendarPostDto;
    }

    @Override
    public CalendarPostDto deletePost(CalendarPostDto calendarPostDto) {
        ModelMapper modelMapper = new ModelMapper();

        CalendarPost calendarPost = modelMapper.map(calendarPostDto, CalendarPost.class);

        calendarPostRepository.delete(calendarPost);

        return calendarPostDto;
    }

    @Override
    public Boolean isUserExist(Long id) {
        return userRepository.findById(id).isPresent();
    }

    @Override
    public Boolean isPostExist(Long postId) {
        return calendarPostRepository.findById(postId).isPresent();
    }
}
