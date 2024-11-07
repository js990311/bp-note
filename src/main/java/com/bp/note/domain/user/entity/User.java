package com.bp.note.domain.user.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id ;

    @Column
    private String username;

    @Column
    private String provider;

    @Column
    private String email;
}
