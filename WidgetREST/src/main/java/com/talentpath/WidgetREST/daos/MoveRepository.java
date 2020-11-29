package com.talentpath.WidgetREST.daos;

import com.talentpath.WidgetREST.models.Move;
import com.talentpath.WidgetREST.models.MoveId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MoveRepository extends JpaRepository<Move, Integer> {

    List<Move> findByGameNumId(Integer id);
}
