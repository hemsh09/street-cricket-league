import Image from "next/image";
import React from "react";

import BatsmanLogo from "../../../static/Images/cricketBatsman.png";

const LeaderboardStats = ({ leaderboardData, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <div> Loading...</div>
      ) : (
        <div className="">
          {leaderboardData.map((item, index) => {
            return (
              <div
                key={item._id}
                className="flex gap-2 p-5 bg-white mt-5 rounded-md"
              >
                <div>{index + 1}</div>
                <Image
                  src={BatsmanLogo}
                  height={34}
                  width={34}
                  className="rounded-[50%] !hidden sm:!flex lg:w-[34px] lg:h-[34px]"
                />
                <div className="text-[16px]">
                  <span>{item.name}</span> | {item.team} | Mat:{item.matches} |
                  Inns:
                  {item.innings} | Runs:{item.runs} | Highest:{item.highest} |
                  Avg:
                  {item.average} | SR:{item.strikeRate} | 6s{item.sixes} | 4s
                  {item.fours} | 50s{item.fifty} | 100s{item.hundred}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LeaderboardStats;
