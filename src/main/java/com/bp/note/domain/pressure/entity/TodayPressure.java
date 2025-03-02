package com.bp.note.domain.pressure.entity;

import com.bp.note.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@Table(name = "today_pressures")
public class TodayPressure {
    @Id @GeneratedValue
    @Column(name = "today_pressure_id")
    private Long id;

    /**
     * 측정일자
     */
    @Column
    private LocalDate date;

    /**
     * 오전 측정시간
     */
    @Column
    private LocalTime amTime;

    /**
     * 오후 측정시간
     */
    @Column
    private LocalTime pmTime;

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

    /* 로직 */

    public void record(Ampm session, LocalTime time){
        if(session == Ampm.AM){
            this.amTime = time;
        }else {
            this.pmTime = time;
        }
    }

    /* 생성 */

    public TodayPressure(){}

    public TodayPressure(LocalDate date){
        this.date = date;
    }

}
