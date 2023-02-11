package cotato.controller;

import cotato.dto.CalendarDto;
import cotato.dto.CalendarPostDto;
import cotato.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CalendarController {

    private final CalendarService calendarService;

    @GetMapping("/cotato")
    List<CalendarPostDto> showPosts(@RequestBody CalendarDto calendarDto){
        return null;
    }

    @PostMapping("/cotato")
    CalendarPostDto saveCalendarPost(@RequestBody CalendarPostDto calendarPostDto){

        calendarService.savePost(calendarPostDto);

        return calendarPostDto;
    }
}
