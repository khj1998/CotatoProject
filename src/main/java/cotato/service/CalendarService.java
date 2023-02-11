package cotato.service;

import cotato.dto.CalendarDto;
import cotato.dto.CalendarPostDto;

import java.time.LocalDate;

public interface CalendarService {

    CalendarPostDto savePost(CalendarPostDto calendarPostDto);
}
