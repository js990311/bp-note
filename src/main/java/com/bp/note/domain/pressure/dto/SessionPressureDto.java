package com.bp.note.domain.pressure.dto;

import com.bp.note.domain.pressure.entity.Ampm;
import com.bp.note.domain.pressure.repository.query.PressureTuple;
import lombok.Getter;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Getter
public class SessionPressureDto {
    private LocalTime time;
    private List<PressureDto> pressures;

    public SessionPressureDto(Ampm session, List<PressureTuple> tuples){
        if(!tuples.isEmpty()){
            if(session == Ampm.AM){
                this.time = tuples.getFirst().getAmTime();
            }else {
                this.time = tuples.getFirst().getPmTime();
            }
        }
        this.pressures = tuples.stream().map((tuple)->{
            return new PressureDto(tuple.getOrder(), tuple.getSystolicPressure(), tuple.getDiastolicPressure());
        }).toList();
    }
}
