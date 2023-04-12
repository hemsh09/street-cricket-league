import React, { memo } from "react";

const Summary = ({ summary }) => {
  return (
    <div>
      {summary?.map((item) => {
        return (
          <div
            key={item.details}
            className="flex flex-col justify-start border-[1px] bg-white p-8 rounded-lg border-solid border-black text-start w-[55%] m-auto mb-20"
          >
            <div className="text-[#14b393] font-bold mb-4">
              {item.tournament}
            </div>
            <div className="text-[#72797f] font-semi-bold mb-4">
              {item.details}
            </div>
            <div className="mb-2 font-bold">{item.stage}</div>
            <div className="mb-2 font-medium">Toss: {item.toss}</div>
            <div className="flex justify-between text-[20px]">
              <div className="mb-2 font-bold">{item.teamA}</div>
              <div className="mb-2 font-bold">
                {item.teamAScore} ({item.teamAOvers})
              </div>
            </div>
            <div className="flex justify-between text-[20px] mb-2">
              <div className="mb-2 font-bold">{item.teamB}</div>
              <div className="mb-2 font-bold">
                {item.teamBScore} ({item.teamBOvers})
              </div>
            </div>
            <div className="mb-2 font-semibold text-[#14b393]">
              {item.result}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Summary);
