package com.bp.note.domain.pressure.form;

import lombok.Getter;

@Getter
public class PressureMeasurementForm {
    private Integer order;
    private Double systolicPressure;
    private Double diastolicPressure;

    public PressureMeasurementForm(){}

    public PressureMeasurementForm(Integer order, Double systolicPressure, Double diastolicPressure) {
        this.order = order;
        this.systolicPressure = systolicPressure;
        this.diastolicPressure = diastolicPressure;
    }
}
