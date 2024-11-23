package com.bp.note.domain.pressure.repository.query;

import com.bp.note.domain.pressure.entity.Ampm;
import lombok.Getter;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.time.LocalTime;

/**
 * 쿼리를 위한 중간 단계
 */
@Getter
public class PressureTuple {
    private LocalDate date;
    private LocalTime amTime;
    private LocalTime pmTime;
    private Ampm session;
    private Integer order;
    private Double diastolicPressure;
    private Double systolicPressure;

    public PressureTuple(LocalDate date, LocalTime amTime, LocalTime pmTime, Ampm session, Integer order, Double diastolicPressure, Double systolicPressure) {
        this.date = date;
        this.amTime = amTime;
        this.pmTime = pmTime;
        this.session = session;
        this.order = order;
        this.diastolicPressure = diastolicPressure;
        this.systolicPressure = systolicPressure;
    }
}
