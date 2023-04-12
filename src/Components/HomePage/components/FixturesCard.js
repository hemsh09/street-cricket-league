import React, { memo } from "react";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";

const FixturesCard = ({ matchData, isLoading }) => {
  const router = useRouter();
  const handleClick = (index) => {
    router.push(`/scorecard/${index + 1}`);
  };
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
          {matchData.map((item, index) => {
            return (
              <div key={item.Date}>
                <div className="bg-white flex flex-col mb-5 sm:mb-0 sm:m-10 border-[1px] rounded-lg p-2 border-solid border-black">
                  <div className="border-b text-center p-2 text-red-400 font-bold">
                    Street Cricket League
                  </div>
                  <div className="flex justify-between p-2">
                    <div className="flex flex-col items-start">
                      <div>{item.Date}</div>
                      <div className="font-bold">{item.competition}</div>
                    </div>
                    <div>Result</div>
                  </div>
                  <div className="flex justify-between p-2">
                    <div className="text-[#3069DD] font-semibold">
                      {item.TeamAName}
                    </div>
                    <div className="font-semibold">{item.TeamAScore}</div>
                  </div>
                  <div className="flex justify-between p-2">
                    <div className="text-[#25C4AA] font-semibold">
                      {item.TeamBName}
                    </div>
                    <div className="font-semibold">{item.TeamBScore}</div>
                  </div>
                  <div className="flex justify-between border-t p-2">
                    <div className="w-1/2 text-start">
                      <span className="font-bold text-[#b8860b]">
                        {item.TeamWon}
                      </span>{" "}
                      won by{" "}
                      <span className="font-bold text-[#b8860b]">
                        {item.WinRuns}
                      </span>
                    </div>
                    <button
                      onClick={() => handleClick(index)}
                      className="flex justify-between hover:transition-all hover:scale-110 items-center gap-5 p-1 bg-yellow-200 border-[2px] border-solid rounded-lg border-yellow-300 "
                    >
                      <div>Score card</div>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default memo(FixturesCard);
