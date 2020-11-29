package com.talentpath.WidgetREST.daos;

import com.talentpath.WidgetREST.models.Move;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


@Component
@Profile({"production"})
public class TestDao {

    @Autowired
    JdbcTemplate template;

    public int addMove(Move toAdd) {

        List<Integer> insertedIds = template.query("insert into \"moves\" (\"move_num\",\"end_pos\",\"start_pos\",\"turn_over\",\"game_num_id\")\n" +
                "values ('"+toAdd.getMoveNum()+"','"+toAdd.getEndPos()+"','"+toAdd.getStartPos()+"','"+toAdd.isTurnOver()+"','"+toAdd.getGameNum().getId()+"')", new IdMapper());


        return insertedIds.get(0);
    }
    class IdMapper implements RowMapper<Integer> {

        @Override
        public Integer mapRow(ResultSet resultSet, int i) throws SQLException {
            return resultSet.getInt("game_num_id");
        }
    }
}
