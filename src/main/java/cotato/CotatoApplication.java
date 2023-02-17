package cotato;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.core.context.SecurityContextHolder;

@EnableJpaAuditing
@SpringBootApplication
public class CotatoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CotatoApplication.class, args);
	}
}
