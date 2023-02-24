package cotato.service;

import cotato.dto.CalendarPostDto;
import cotato.dto.CalendarShowUserDto;
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
    public List<CalendarShowUserDto> showAllPostsWithCalendarPostDto() {
        List<CalendarPost> calendarPostList = calendarPostRepository.findAll();
        List<CalendarShowUserDto> calendarShowUserDtoList= new ArrayList<>();

        ModelMapper modelMapper = new ModelMapper();

        for (CalendarPost calendarPost : calendarPostList) {
            CalendarShowUserDto calendarShowUserDto = modelMapper.map(calendarPost, CalendarShowUserDto.class);
            calendarShowUserDto.setAuthorId(calendarPost.getAuthor().getId());

            calendarShowUserDtoList.add(calendarShowUserDto);
        }

        return calendarShowUserDtoList;
    }

    @Override
    public List<CalendarShowUserDto> showPostsWithDay(Long year, Long month, Long day) {
        List<CalendarPost> calendarPostList = calendarPostRepository.findAll();
        List<CalendarShowUserDto> calendarShowUserDtoList = new ArrayList<>();

        ModelMapper modelMapper = new ModelMapper();

        for(CalendarPost calendarPost : calendarPostList)
            if(Long.parseLong(calendarPost.getStartYear())<=year && Long.parseLong(calendarPost.getEndYear())>=year)
                if(Long.parseLong(calendarPost.getStartMonth())<=month && Long.parseLong(calendarPost.getEndMonth())>=month)
                    if(Long.parseLong(calendarPost.getStartDay())<=day && Long.parseLong(calendarPost.getEndDay())>=day){

                        CalendarShowUserDto calendarShowUserDto = modelMapper.map(calendarPost, CalendarShowUserDto.class);
                        calendarShowUserDto.setAuthorId(calendarPost.getAuthor().getId());

                        calendarShowUserDtoList.add(calendarShowUserDto);
                    }

        return calendarShowUserDtoList;
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
    public Boolean canCreateDate(CalendarPostDto calendarPostDto) {
        if(Integer.parseInt(calendarPostDto.getStartYear()) <= Integer.parseInt(calendarPostDto.getEndYear()))
            if(Integer.parseInt(calendarPostDto.getStartMonth()) <= Integer.parseInt(calendarPostDto.getEndMonth()))
                if(Integer.parseInt(calendarPostDto.getStartDay()) <= Integer.parseInt(calendarPostDto.getEndDay()))
                    return true;

        return false;
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
