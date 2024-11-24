package com.bp.note.domain.pressure.dto;

import com.bp.note.domain.pressure.repository.query.PressureTuple;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class MonthlyAveragePressureDto {
    private Integer year;
    private Integer month;
    private List<DatePressureDto> records;

    public MonthlyAveragePressureDto(Integer year, Integer month, List<DatePressureDto> records) {
        this.year = year;
        this.month = month;
        this.records = records;
    }

    public static MonthlyAveragePressureDto from(Integer year, Integer month, List<PressureTuple> tuples){
        List<DatePressureDto> records = new ArrayList<>();
        for(PressureTuple tuple : tuples){
            if(records.isEmpty()){
                records.add(DatePressureDto.from(tuple));
            }else{
                if(!records.getLast().setDatePressure(tuple)){
                    // setDatePressure함수는 성공적으로 입력되었을 경우 true를 반환한다
                    // 즉 false인 경우엔 날짜가 다르다는 뜻
                    records.add(DatePressureDto.from(tuple));
                }
            }
        }

        return new MonthlyAveragePressureDto(year, month, records);
    }
}
