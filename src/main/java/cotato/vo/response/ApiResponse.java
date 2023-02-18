package cotato.vo.response;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@JsonPropertyOrder({"httpStatusCode","success","message","data"})
public class ApiResponse<T> {

    private final HttpStatus httpStatusCode;
    private final boolean success;
    private final String message;
    private final T  data;

    private ApiResponse(ApiResponseBuilder builder) {
        this.httpStatusCode = builder.httpStatusCode;
        this.success = builder.success;
        this.message = builder.message;
        this.data = (T)builder.data;
    }

    public HttpStatus getHttpStatusCode() {
        return this.httpStatusCode;
    }

    public boolean getSuccess() {
        return this.success;
    }

    public String getMessage() {
        return this.message;
    }

    public T getData() {
        return this.data;
    }

    public static class ApiResponseBuilder<T> {

        private HttpStatus httpStatusCode;
        private boolean success;
        private String message;
        private T data;

        public ApiResponseBuilder(HttpStatus httpStatusCode) {
            this.httpStatusCode = httpStatusCode;
        }

        public ApiResponseBuilder<T> success(boolean success) {
            this.success = success;
            return this;
        }

        public ApiResponseBuilder<T> message(String message) {
            this.message = message;
            return this;
        }

        public ApiResponseBuilder<T> data(T data) {
            this.data = data;
            return this;
        }

        public ResponseEntity<ApiResponse> build() {
            ApiResponse<T> apiResponse = new ApiResponse<>(this);
            return ResponseEntity.status(apiResponse.getHttpStatusCode())
                    .body(apiResponse);
        }
    }
}
