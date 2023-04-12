import React, { useEffect, useState } from "react";

import Summary from "./summary";
import Scoreboard from "./scoreboard";
import getMatchStats from "../services/getMatchStats";
import { useRouter } from "next/router";

const ScoreCard = () => {
  const [matchStats, setMatchStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getMatchStats(setMatchStats, setIsLoading, id);
    }
  }, [id]);

  const {
    teamA,
    teamB,
    teamAScore,
    teamBScore,
    summary,
    batsmenAStats,
    batsmenBStats,
    bowlerAStats,
    bowlerBStats,
  } = matchStats;
  console.log({ matchStats });
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <Summary summary={summary} />
          <Scoreboard
            teamA={teamA}
            teamB={teamB}
            teamAScore={teamAScore}
            teamBScore={teamBScore}
            batsmenAStats={batsmenAStats}
            batsmenBStats={batsmenBStats}
            bowlerAStats={bowlerAStats}
            bowlerBStats={bowlerBStats}
          />
        </div>
      )}
    </div>
  );
};

export default ScoreCard;
