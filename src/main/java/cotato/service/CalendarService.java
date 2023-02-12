package cotato.service;

import cotato.dto.CalendarDto;
import cotato.dto.CalendarPostDto;

import java.time.LocalDate;

public interface CalendarService {

    CalendarPostDto savePost(CalendarPostDto calendarPostDto);

    CalendarPostDto deletePost(CalendarPostDto calendarPostDto);

    Boolean isUserExist(Long id);

    Boolean isPostExist(Long postId);
}
