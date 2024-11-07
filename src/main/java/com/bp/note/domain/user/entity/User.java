package com.bp.note.domain.user.entity;

import com.bp.note.domain.pressure.entity.TodayPressure;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "users")
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

    /* 관계 TodayPressure */
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TodayPressure> todayPressures = new ArrayList<>();

    public void addTodayPressure(TodayPressure todayPressure){
        this.todayPressures.add(todayPressure);
    }

}
