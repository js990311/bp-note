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

    /**
     * 오늘의 혈압을 위한 데이터
     * @param date
     * @param amTime
     * @param pmTime
     * @param session
     * @param order
     * @param diastolicPressure
     * @param systolicPressure
     */
    public PressureTuple(LocalDate date, LocalTime amTime, LocalTime pmTime, Ampm session, Integer order, Double diastolicPressure, Double systolicPressure) {
        this.date = date;
        this.amTime = amTime;
        this.pmTime = pmTime;
        this.session = session;
        this.order = order;
        this.diastolicPressure = diastolicPressure;
        this.systolicPressure = systolicPressure;
    }

    /**
     * 월별 평균 쿼리를 위한 데이터
     * @param date
     * @param session
     * @param diastolicPressure
     * @param systolicPressure
     */
    public PressureTuple(LocalDate date, Ampm session, Double diastolicPressure, Double systolicPressure) {
        this.date = date;
        this.session = session;
        this.diastolicPressure = diastolicPressure;
        this.systolicPressure = systolicPressure;
    }
}
