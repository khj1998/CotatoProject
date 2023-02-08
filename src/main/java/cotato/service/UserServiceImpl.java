package cotato.service;

import cotato.dto.UserDto;
import cotato.exception.UserAlreadyExistsException;
import cotato.repository.UserRepository;
import cotato.vo.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public UserDto saveUser(UserDto userDto) {
        boolean isExists = checkUserExists(userDto.getUserId());

        if (isExists) {
            throw new UserAlreadyExistsException(String.format("User %s already exists", userDto.getUserId()));
        } else {
            ModelMapper mapper = new ModelMapper();
            mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
            User user = mapper.map(userDto,User.class);
            userRepository.save(user);
        }

        return userDto;
    }

    private boolean checkUserExists(String userId) {
        User user = userRepository.findByUserId(userId);
        return user!=null;
    }
}
