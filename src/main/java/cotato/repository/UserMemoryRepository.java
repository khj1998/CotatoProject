package cotato.repository;

import cotato.dto.UserDto;

public interface UserMemoryRepository {
    void saveUser(UserDto userDto);
    void getAllUsers();
}
