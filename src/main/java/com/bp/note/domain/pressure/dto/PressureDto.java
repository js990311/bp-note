package com.bp.note.domain.pressure.dto;

import lombok.Getter;

@Getter
public class PressureDto {
    private Integer order;
    private Double systolicPressure;
    private Double diastolicPressure;

    public PressureDto(Integer order, Double systolicPressure, Double diastolicPressure) {
        this.order = order;
        this.systolicPressure = systolicPressure;
        this.diastolicPressure = diastolicPressure;
    }
}
