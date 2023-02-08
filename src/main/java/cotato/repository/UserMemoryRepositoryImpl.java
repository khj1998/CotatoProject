package cotato.repository;

import cotato.dto.UserDto;
import cotato.exception.UserAlreadyExistsException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Repository
public class UserMemoryRepositoryImpl implements UserMemoryRepository{
    List<UserDto> userList = new ArrayList<UserDto>();

    @Override
    public void saveUser(UserDto userDto) {
        boolean isExistUser = userList.stream().anyMatch(user -> user.getUserId().equals(userDto.getUserId()));

        if (isExistUser) {
            throw new UserAlreadyExistsException(String.format("User %s already exists", userDto.getUserId()));
        } else {
            userList.add(userDto);
        }
    }

    @Override
    public void getAllUsers() {
        userList.stream().forEach(userDto -> log.info("user : {}",userDto.getUserId()));
    }
}
