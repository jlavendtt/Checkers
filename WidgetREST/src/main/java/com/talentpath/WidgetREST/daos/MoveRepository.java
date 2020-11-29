package com.talentpath.WidgetREST.daos;

import com.talentpath.WidgetREST.models.Move;
import com.talentpath.WidgetREST.models.MoveId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MoveRepository extends JpaRepository<Move, MoveId> {
}
