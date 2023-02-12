package cotato.service;

import cotato.dto.CalendarPostDto;
import cotato.dto.CalendarShowUserDto;

import java.util.List;

public interface CalendarService {

    List<CalendarShowUserDto> showAllPostsWithCalendarPostDto();

    CalendarPostDto savePost(CalendarPostDto calendarPostDto);

    CalendarPostDto deletePost(CalendarPostDto calendarPostDto);

    Boolean isUserExist(Long id);

    Boolean isPostExist(Long postId);
}
