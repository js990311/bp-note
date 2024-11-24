package com.bp.note.domain.pressure.form;

import com.bp.note.domain.pressure.entity.Ampm;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Getter
public class PressureRecordForm {
    private LocalDate date;
    private Ampm session;
    private LocalTime time;
    private List<PressureMeasurementForm> pressures;
}
