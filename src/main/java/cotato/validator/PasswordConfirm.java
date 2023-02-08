package cotato.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;

@Target({TYPE,ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PasswordConfirmValidator.class)
@Documented
public @interface PasswordConfirm {
    String message() default "패스워드가 일치하지 않습니다!";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
