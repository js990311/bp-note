package com.bp.note.domain.pressure.entity;

import com.bp.note.domain.user.entity.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "today_pressures")
public class TodayPressure {
    @Id @GeneratedValue
    @Column(name = "today_pressure_id")
    private Long id;

    @Column
    private LocalDate measurementDate;

    /* 관계 TodayPressure */
    @OneToMany(mappedBy = "todayPressure", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Pressure> pressures = new ArrayList<>();

    public void addPressure(Pressure pressure){
        this.pressures.add(pressure);
    }

    /* 관계 User */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "user_id", insertable = false, updatable = false)
    private Long userId;

    public void mapUser(User user){
        this.user = user;
    }


}
