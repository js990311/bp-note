package com.bp.note.domain.pressure.repository;

import com.bp.note.domain.pressure.entity.TodayPressure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodayPressureRepository extends JpaRepository<TodayPressure, Long> {
}
