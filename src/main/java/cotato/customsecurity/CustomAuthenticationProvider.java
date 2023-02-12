package cotato.customsecurity;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private final UserDetailsService userDetailsService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        UsernamePasswordAuthenticationToken authToken = null;

        if (authentication == null) {
            return null;
        }
        String username = String.valueOf(authentication.getName());
        String password = String.valueOf(authentication.getCredentials());

        //User is an org.springframework.security.core.userdetails.User object
        UserDetails user = userDetailsService.loadUserByUsername(username);

        if (user == null) {
            return null; //throw new UsernameNotFoundException(String.format("Username not found"));
        }

        if (user.getPassword().equals(password)) {
            authToken = new UsernamePasswordAuthenticationToken(user.getUsername(), null, user.getAuthorities());
        }
        return authToken;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
