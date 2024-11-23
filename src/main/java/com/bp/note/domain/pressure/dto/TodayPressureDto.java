package com.bp.note.domain.pressure.dto;

import com.bp.note.domain.pressure.entity.Ampm;
import com.bp.note.domain.pressure.repository.query.PressureTuple;
import lombok.Getter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
public class TodayPressureDto {
    private LocalDate date;
    private SessionPressureDto am;
    private SessionPressureDto pm;

    public TodayPressureDto(List<PressureTuple> tuples) {
        if(!tuples.isEmpty()){
            this.date = tuples.getFirst().getDate();
        }
        List<PressureTuple> amTuples = new ArrayList<>();
        List<PressureTuple> pmTuples = new ArrayList<>();
        for(PressureTuple tuple : tuples){
            if(tuple.getSession() == Ampm.AM){
                amTuples.add(tuple);
            }else {
                pmTuples.add(tuple);
            }
        }
        am = new SessionPressureDto(Ampm.AM, amTuples);
        pm = new SessionPressureDto(Ampm.PM, pmTuples);
    }
}

