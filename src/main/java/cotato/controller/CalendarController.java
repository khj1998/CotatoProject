package cotato.controller;

import cotato.dto.CalendarPostDto;
import cotato.exception.PostNotFoundException;
import cotato.exception.UserNotFoundException;
import cotato.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CalendarController {

    private final CalendarService calendarService;

    @GetMapping("/cotato")
    ResponseEntity<List<CalendarPostDto>> showAllPosts(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(calendarService.showAllPostsWithCalendarPostDto());
    }

    @PostMapping("/cotato")
    ResponseEntity<CalendarPostDto> saveCalendarPost(@RequestBody CalendarPostDto calendarPostDto){

        if(!calendarService.isUserExist(calendarPostDto.getAuthor().getId()))
            throw new UserNotFoundException(calendarPostDto.getAuthor().getId());

        calendarService.savePost(calendarPostDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(calendarPostDto);
    }

    @DeleteMapping("/cotato")
    ResponseEntity<CalendarPostDto> deleteCalendarPost(@RequestBody CalendarPostDto calendarPostDto){

        if(!calendarService.isPostExist(calendarPostDto.getPostId()))
            throw new PostNotFoundException(calendarPostDto.getPostId());

        calendarService.deletePost(calendarPostDto);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(calendarPostDto);
    }
}
