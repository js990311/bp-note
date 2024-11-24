package com.bp.note.domain.pressure.dto;

import com.bp.note.domain.pressure.entity.Ampm;
import com.bp.note.domain.pressure.repository.query.PressureTuple;
import lombok.Getter;

import java.time.LocalDate;

/**
 * PressureDto에서 order가 빠진 형식
 */
@Getter
public class AveragePressureDto {
    private Double diastolicPressure;
    private Double systolicPressure;

    public AveragePressureDto( Double diastolicPressure, Double systolicPressure) {
        this.diastolicPressure = diastolicPressure;
        this.systolicPressure = systolicPressure;
    }

    public static AveragePressureDto from(PressureTuple tuple){
        return new AveragePressureDto(
                tuple.getDiastolicPressure(),
                tuple.getSystolicPressure()
        );
    }
}
