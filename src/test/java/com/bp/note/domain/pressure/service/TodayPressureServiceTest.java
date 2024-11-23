package com.bp.note.domain.pressure.service;

import com.bp.note.domain.pressure.dto.TodayPressureDto;
import com.bp.note.domain.pressure.entity.Ampm;
import com.bp.note.domain.pressure.entity.TodayPressure;
import com.bp.note.domain.pressure.form.PressureMeasurementForm;
import com.bp.note.domain.pressure.repository.TodayPressureRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ActiveProfiles("test")
@SpringBootTest
class TodayPressureServiceTest {
    @Autowired
    private TodayPressureService todayPressureService;

    @Autowired
    private TodayPressureRepository todayPressureRepository;

    @BeforeEach
    public void beforeEach(){
        LocalDate date = LocalDate.now();
        TodayPressure todayPressure = todayPressureRepository.findByDate(date).orElseThrow();
        todayPressureRepository.delete(todayPressure);
    }

    @Test
    public void recordPressure(){
        LocalDate date = LocalDate.now();
        LocalTime amTime = LocalTime.now();
        LocalTime pmTime = LocalTime.now();
        List<PressureMeasurementForm> forms = new ArrayList<>();
        for(int i=0;i<2;i++){
            forms.add(new PressureMeasurementForm(i, 120.0, 80.0));
        }
        todayPressureService.recordPressure(date, Ampm.AM, amTime, forms);
        todayPressureService.recordPressure(date, Ampm.PM, pmTime, forms);
        TodayPressure todayPressure = todayPressureRepository.findByDate(date).orElseThrow();
        assertEquals(date, todayPressure.getDate());
        assertEquals(amTime.truncatedTo(ChronoUnit.SECONDS), todayPressure.getAmTime().truncatedTo(ChronoUnit.SECONDS));
        assertEquals(pmTime.truncatedTo(ChronoUnit.SECONDS), todayPressure.getPmTime().truncatedTo(ChronoUnit.SECONDS));
    }

    @Test
    public void findByDate(){
        LocalDate date = LocalDate.now();
        LocalTime amTime = LocalTime.now();
        LocalTime pmTime = LocalTime.now();
        List<PressureMeasurementForm> forms = new ArrayList<>();
        for(int i=0;i<2;i++){
            forms.add(new PressureMeasurementForm(i, 120.0, 80.0));
        }
        todayPressureService.recordPressure(date, Ampm.AM, amTime, forms);
        todayPressureService.recordPressure(date, Ampm.PM, pmTime, forms);

        TodayPressureDto pressure = todayPressureService.findByDate(date);

        assertEquals(
                date,pressure.getDate()
        );
        assertEquals(
                amTime.truncatedTo(ChronoUnit.SECONDS),
                pressure.getAm().getTime().truncatedTo(ChronoUnit.SECONDS)
        );
        assertEquals(
                pmTime.truncatedTo(ChronoUnit.SECONDS),
                pressure.getPm().getTime().truncatedTo(ChronoUnit.SECONDS)
        );
        assertEquals(
                forms.size(),
                pressure.getAm().getPressures().size()
        );
        assertEquals(
                forms.size(),
                pressure.getPm().getPressures().size()
        );
    }

}