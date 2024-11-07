package com.bp.note.domain.pressure.repository;

import com.bp.note.domain.pressure.entity.Pressure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PressureRepository extends JpaRepository<Pressure, Long> {
}
