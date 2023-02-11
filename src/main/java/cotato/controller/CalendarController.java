package cotato.controller;

import cotato.dto.CalendarDto;
import cotato.dto.CalendarPostDto;
import cotato.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    ResponseEntity<CalendarPostDto> showPosts(@RequestBody CalendarDto calendarDto){
        return null;
    }

    @PostMapping("/cotato")
    ResponseEntity<CalendarPostDto> saveCalendarPost(@RequestBody CalendarPostDto calendarPostDto){

        System.out.println(calendarPostDto);

        calendarService.savePost(calendarPostDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(calendarPostDto);
    }
}
