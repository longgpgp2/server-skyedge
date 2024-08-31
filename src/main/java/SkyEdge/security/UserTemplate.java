package SkyEdge.security;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserTemplate {
    @Length(min = 6, max = 60)
    private String username;
    @Pattern(regexp = "^(?=.*\\d)(?=.*[A-Z]).{6,60}$", message = "6 chars min (at least 1" +
            "digit & 1 uppercase letter)")
    private String password;

    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$", message = "Invalid email format")
    private String email;
    // getter & setter methods
    private String name;
}
