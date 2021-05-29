package com.anilb.myrestservice.domain;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

/**
 * An authority (a security role) used by Spring Security.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table("user_authority")
public class Authority implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    private String name;
    private Long userId;

    public Authority(String name) {
        this.name = name;
    }
}
