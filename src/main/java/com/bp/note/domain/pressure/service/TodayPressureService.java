package com.bp.note.domain.pressure.service;

import com.bp.note.domain.pressure.dto.MonthlyAveragePressureDto;
import com.bp.note.domain.pressure.dto.TodayPressureDto;
import com.bp.note.domain.pressure.entity.Ampm;
import com.bp.note.domain.pressure.entity.Pressure;
import com.bp.note.domain.pressure.entity.TodayPressure;
import com.bp.note.domain.pressure.form.PressureMeasurementForm;
import com.bp.note.domain.pressure.repository.PressureRepository;
import com.bp.note.domain.pressure.repository.TodayPressureRepository;
import com.bp.note.domain.pressure.repository.query.PressureQueryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TodayPressureService {
    private final TodayPressureRepository todayPressureRepository;
    private final PressureRepository pressureRepository;
    private final PressureQueryRepository pressureQueryRepository;

    /* Create */
    @Transactional
    public void recordPressure(LocalDate date, Ampm session, LocalTime time, List<PressureMeasurementForm> forms){
        Optional<TodayPressure> opt = todayPressureRepository.findByDate(date);
        TodayPressure today = opt.orElseGet(() -> new TodayPressure(date));
        today.record(session, time);
        List<Pressure> pressures = new ArrayList<>();
        for(PressureMeasurementForm form : forms){
            pressures.add(new Pressure(session, form.getOrder(), form.getSystolicPressure(), form.getDiastolicPressure(), today));
        }
        todayPressureRepository.save(today);
    }

    /* Read */
    public TodayPressureDto findByDate(LocalDate date){
        return pressureQueryRepository.findByDate(date);
    }

    public MonthlyAveragePressureDto queryByMonth(int year, int month){
        return pressureQueryRepository.findByMonth(year, month);
    }

    /* Update */

    /* Delete */

}
