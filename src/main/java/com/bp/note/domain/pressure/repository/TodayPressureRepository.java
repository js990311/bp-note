package com.bp.note.domain.pressure.repository;

import com.bp.note.domain.pressure.entity.TodayPressure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Optional;

public interface TodayPressureRepository extends JpaRepository<TodayPressure, Long> {
    Optional<TodayPressure> findByDate(@Param("date") LocalDate date);
}
