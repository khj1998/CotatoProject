package cotato.vo;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity(name = "board_image")
public class BoardFileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String originalFileName;
    @Column
    private String serverFileName;

    @ManyToOne
    @JoinColumn(name = "board_post_id")
    BoardPostEntity boardPostEntity;
}
