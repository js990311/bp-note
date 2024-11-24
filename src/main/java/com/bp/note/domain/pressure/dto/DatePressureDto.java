package com.bp.note.domain.pressure.dto;

import com.bp.note.domain.pressure.entity.Ampm;
import com.bp.note.domain.pressure.repository.query.PressureTuple;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class DatePressureDto {
    private LocalDate date;
    private AveragePressureDto am;
    private AveragePressureDto pm;

    private void setSession(Ampm session, AveragePressureDto averagePressure){
        if(session == Ampm.AM){
            am = averagePressure;
        }else {
            pm = averagePressure;
        }

    }

    public boolean setDatePressure(PressureTuple tuple){
        if(!tuple.getDate().equals(date)){
            return false;
        }
        AveragePressureDto averagePressure = AveragePressureDto.from(tuple);
        setSession(tuple.getSession(), averagePressure);
        return true;
    }

    public DatePressureDto(LocalDate date, Ampm session, AveragePressureDto averagePressure) {
        this.date = date;
        setSession(session, averagePressure);
    }

    public static DatePressureDto from(PressureTuple tuple){
        AveragePressureDto averagePressure = AveragePressureDto.from(tuple);
        return new DatePressureDto(
                tuple.getDate(),
                tuple.getSession(),
                averagePressure
        );
    }

}
