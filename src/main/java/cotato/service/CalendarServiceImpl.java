package cotato.service;

import cotato.dto.CalendarDto;
import cotato.dto.CalendarPostDto;
import cotato.repository.CalendarPostRepository;
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

    @Override
    public CalendarPostDto savePost(CalendarPostDto calendarPostDto) {
        ModelMapper modelMapper = new ModelMapper();

        CalendarPost calendarPost = modelMapper.map(calendarPostDto, CalendarPost.class);

        System.out.println(calendarPost);

        calendarPostRepository.save(calendarPost);

        return calendarPostDto;
    }
}
