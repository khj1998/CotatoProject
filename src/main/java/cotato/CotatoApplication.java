package cotato;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class CotatoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CotatoApplication.class, args);
	}
}
