import React, { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

import cricketTournament from "../../../static/Images/LeagueBanner.jpg";
import { getTournament } from "../services";

const TournamentCard = ({}) => {
  const [tournament, setTournament] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    router.push(`/login`);
  };

  useEffect(() => {
    getTournament(setTournament, setIsLoading);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[80%] m-auto">
          {tournament.map((item, index) => {
            return (
              <div key={item.title}>
                <div
                  onClick={handleClick}
                  className="bg-white flex flex-col m-10 border-[1px] rounded-lg p-2 border-solid border-black hover:transition-all hover:scale-110"
                >
                  <Image
                    src={cricketTournament}
                    alt="Tournament"
                    height={300}
                    width={600}
                  />
                  <div className="text-start p-2 text-[30px] font-semibold">
                    {item.title}
                  </div>
                  <div className="flex justify-start items-center gap-5 p-2">
                    <FaCalendarAlt />
                    <div>{item.date}</div>
                  </div>
                  <div className="flex justify-start items-center gap-5 p-2">
                    <FaMapMarkerAlt />
                    <div>{item.location}</div>
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

export default memo(TournamentCard);
