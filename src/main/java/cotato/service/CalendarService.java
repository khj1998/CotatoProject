package cotato.service;

import cotato.dto.CalendarPostDto;
import cotato.dto.CalendarShowUserDto;

import java.util.List;

public interface CalendarService {

    List<CalendarShowUserDto> showAllPostsWithCalendarPostDto();

    List<CalendarShowUserDto> showPostsWithDay(Long year, Long month, Long day);

    CalendarPostDto savePost(CalendarPostDto calendarPostDto);

    CalendarPostDto deletePost(CalendarPostDto calendarPostDto);

    Boolean canCreateDate(CalendarPostDto calendarPostDto);

    Boolean isUserExist(Long id);

    Boolean isPostExist(Long postId);
}
