package com.bp.note.domain.pressure.entity;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalTime;

@Getter
@Entity
@Table(name = "pressures")
public class Pressure {
    @Id
    @GeneratedValue
    @Column(name = "pressure_id")
    private Long id;

    @Column
    private Double systolicPressure;

    @Column
    private Double diastolicPressure;

    /**
     * N차 시도
     */
    @Column(name = "measure_order")
    private Integer order;

    @Enumerated(EnumType.STRING)
    @Column
    private Ampm session;

    /* 관계 Pressure */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "today_pressure_id")
    private TodayPressure todayPressure;

    @Column(name = "today_pressure_id", insertable = false, updatable = false)
    private Long todayPressureId;

    public void mapTodayPressure(TodayPressure todayPressure){
        this.todayPressure = todayPressure;
        todayPressure.addPressure(this);
    }

    /* 생성 */
    public Pressure(){}

    public Pressure(Ampm session, Integer order, Double systolicPressure, Double diastolicPressure, TodayPressure todayPressure){
        this.session = session;
        this.order = order;
        this.systolicPressure = systolicPressure;
        this.diastolicPressure = diastolicPressure;
        mapTodayPressure(todayPressure);
    }

}
