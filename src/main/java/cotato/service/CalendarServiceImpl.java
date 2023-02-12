package cotato.service;

import cotato.dto.CalendarDto;
import cotato.dto.CalendarPostDto;
import cotato.repository.CalendarPostRepository;
import cotato.repository.UserRepository;
import cotato.vo.CalendarPost;
import cotato.vo.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class CalendarServiceImpl implements CalendarService{

    private final CalendarPostRepository calendarPostRepository;
    private final UserRepository userRepository;

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
