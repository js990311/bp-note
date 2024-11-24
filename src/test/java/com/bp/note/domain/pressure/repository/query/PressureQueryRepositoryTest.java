package com.bp.note.domain.pressure.repository.query;

import com.bp.note.domain.pressure.dto.MonthlyAveragePressureDto;
import com.bp.note.domain.pressure.entity.Ampm;
import com.bp.note.domain.pressure.form.PressureMeasurementForm;
import com.bp.note.domain.pressure.repository.TodayPressureRepository;
import com.bp.note.domain.pressure.service.TodayPressureService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ActiveProfiles("test")
@SpringBootTest
class PressureQueryRepositoryTest {

    @Autowired
    private TodayPressureService todayPressureService;

    @Autowired
    private PressureQueryRepository pressureQueryRepository;

    private int year = 2012;
    private int month = 2;
    private LocalTime time = LocalTime.now();
    
    @Test
    public void queryByMonth(){
        // g
        List<PressureMeasurementForm> forms = new ArrayList<>();
        for(int i=0;i<2;i++){
            forms.add(new PressureMeasurementForm(i, 120.0, 80.0));
        }
        for(int day=1;day<=28;day++){
            todayPressureService.recordPressure(LocalDate.of(year,month,day), Ampm.AM, time,forms);
            todayPressureService.recordPressure(LocalDate.of(year,month,day), Ampm.PM, time,forms);
        }
        // t 
        MonthlyAveragePressureDto monthly = pressureQueryRepository.findByMonth(year, month);
        assertNotNull(monthly);
        assertEquals(28, monthly.getRecords().size());
        assertEquals(month,monthly.getMonth());
        assertEquals(year, monthly.getYear());
        monthly.getRecords().forEach(
                record -> {
                    assertNotNull(record.getAm());
                    assertNotNull(record.getPm());
                }
        );

    }

}