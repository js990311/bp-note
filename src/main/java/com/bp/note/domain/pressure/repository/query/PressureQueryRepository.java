package com.bp.note.domain.pressure.repository.query;

import com.bp.note.domain.pressure.dto.TodayPressureDto;
import com.bp.note.domain.pressure.entity.QPressure;
import com.bp.note.domain.pressure.entity.QTodayPressure;
import com.bp.note.domain.user.entity.QUser;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Transactional(readOnly = true)
@Repository
public class PressureQueryRepository {
    private final JPAQueryFactory queryFactory;
    private final QPressure qPressure;
    private final QTodayPressure qTodayPressure;
    private final QUser qUser;

    public PressureQueryRepository(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
        qPressure = QPressure.pressure;
        qTodayPressure = QTodayPressure.todayPressure;
        qUser = QUser.user;
    }

    public TodayPressureDto findByDate(LocalDate date){
        List<PressureTuple> tuple = queryFactory
                .select(
                        Projections.constructor(
                                PressureTuple.class,
                                qTodayPressure.date,
                                qTodayPressure.amTime,
                                qTodayPressure.pmTime,
                                qPressure.session,
                                qPressure.order,
                                qPressure.systolicPressure,
                                qPressure.diastolicPressure
                        )
                )
                .from(qPressure)
                .join(qPressure.todayPressure, qTodayPressure)
                .where(qTodayPressure.date.eq(date))
                .orderBy(qPressure.session.desc(), qPressure.order.desc())
                .fetch();
        return new TodayPressureDto(tuple);
    }
}
