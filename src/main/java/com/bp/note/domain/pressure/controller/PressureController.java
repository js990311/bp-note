package com.bp.note.domain.pressure.controller;

import com.bp.note.domain.pressure.dto.MonthlyAveragePressureDto;
import com.bp.note.domain.pressure.dto.TodayPressureDto;
import com.bp.note.domain.pressure.form.PressureRecordForm;
import com.bp.note.domain.pressure.service.TodayPressureService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RequestMapping("/pressure")
@RequiredArgsConstructor
@RestController
public class PressureController {
    private final TodayPressureService pressureService;

    @GetMapping("/{date}")
    public TodayPressureDto getByDate(@PathVariable("date") String dateString){
        LocalDate date = LocalDate.parse(dateString, DateTimeFormatter.ISO_DATE);
        return pressureService.findByDate(date);
    }

    @PostMapping("/record")
    public TodayPressureDto recordPressure(@RequestBody PressureRecordForm form){
        pressureService.recordPressure(
                form.getDate(),
                form.getSession(),
                form.getTime(),
                form.getPressures()
        );
        return pressureService.findByDate(form.getDate());
    }

    @GetMapping("/record")
    public MonthlyAveragePressureDto getRecordByMonth(
            @RequestParam("year") int year,
            @RequestParam("month") int month
    ){
        return pressureService.queryByMonth(year, month);
    }
}
