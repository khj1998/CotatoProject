package cotato.controller;

import cotato.dto.CalendarPostDto;
import cotato.dto.CalendarShowUserDto;
import cotato.exception.DateInversionException;
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
    ResponseEntity<List<CalendarShowUserDto>> showAllPosts(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(calendarService.showAllPostsWithCalendarPostDto());
    }

    @GetMapping("/cotato/{year}/{month}/{day}")
    ResponseEntity<List<CalendarShowUserDto>> showPostsWithDay(@PathVariable Long year,
                                                             @PathVariable Long month,
                                                             @PathVariable Long day)
    {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(calendarService.showPostsWithDay(year, month, day));
    }

    @PostMapping("/cotato")
    ResponseEntity<CalendarPostDto> saveCalendarPost(@RequestBody CalendarPostDto calendarPostDto){

        if(!calendarService.isUserExist(calendarPostDto.getAuthor().getId()))
            throw new UserNotFoundException(calendarPostDto.getAuthor().getId());

        if(!calendarService.canCreateDate(calendarPostDto))
            throw new DateInversionException();

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
