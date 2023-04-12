import React, { useState } from "react";
import { Tab } from "@headlessui/react";

const Scoreboard = ({
  batsmenAStats,
  batsmenBStats,
  bowlerAStats,
  bowlerBStats,
  teamA,
  teamB,
  teamAScore,
  teamBScore,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-[55%] m-auto bg-white">
      <div className="border-b">
        <Tab.Group onChange={(tab) => setSelectedTab(tab)}>
          <Tab.List className="flex">
            <Tab
              className={`px-4 ${
                selectedTab === 0
                  ? "bg-white text-black font-bold"
                  : "bg-gray-200 text-gray-600"
              } py-2.5 flex-1 text-center text-sm font-medium uppercase tracking-wider cursor-pointer`}
            >
              {teamA} ({teamAScore})
            </Tab>
            <Tab
              className={`px-4 ${
                selectedTab === 1
                  ? "bg-white text-black font-bold"
                  : "bg-gray-200 text-gray-600"
              } py-2.5 flex-1 text-center text-sm font-medium uppercase tracking-wider cursor-pointer`}
            >
              {teamB} ({teamBScore})
            </Tab>
          </Tab.List>

          <Tab.Panels>
            {/* Team A Table */}
            <Tab.Panel>
              <div className="w-full overflow-x-auto">
                <table className="table-auto w-full border-collapse border">
                  <thead className="text-xs font-bold text-gray-600 uppercase border-b">
                    <tr>
                      <th className="py-2 px-1">Player</th>
                      <th className="py-2 px-1">Runs</th>
                      <th className="py-2 px-1">Balls</th>
                      <th className="py-2 px-1">4s</th>
                      <th className="py-2 px-1">6s</th>
                      <th className="py-2 px-1">SR</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-normal text-gray-700">
                    {batsmenAStats?.map((player, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        <td className="py-2 px-1 text-[#14b393] font-semibold">
                          {player.name}
                        </td>
                        <td className="py-2 px-1">{player.runs}</td>
                        <td className="py-2 px-1">{player.balls}</td>
                        <td className="py-2 px-1">{player.fours}</td>
                        <td className="py-2 px-1">{player.sixes}</td>
                        <td className="py-2 px-1">
                          {player.strikeRate.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-16 w-full overflow-x-auto">
                <table className="table-auto w-full border-collapse border">
                  <thead className="text-xs font-bold text-gray-600 uppercase border-b">
                    <tr>
                      <th className="py-2 px-1">Bowler</th>
                      <th className="py-2 px-1">O</th>
                      <th className="py-2 px-1">M</th>
                      <th className="py-2 px-1">R</th>
                      <th className="py-2 px-1">W</th>
                      <th className="py-2 px-1">Econ</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-normal text-gray-700">
                    {bowlerBStats?.map((bowler, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        <td className="py-2 px-1 text-[#0e7ae0] font-semibold">
                          {bowler.name}
                        </td>
                        <td className="py-2 px-1">{bowler.overs}</td>
                        <td className="py-2 px-1">{bowler.maidens}</td>
                        <td className="py-2 px-1">{bowler.runs}</td>
                        <td className="py-2 px-1">{bowler.wickets}</td>
                        <td className="py-2 px-1">
                          {bowler.economy.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab.Panel>
            {/* Team B Table */}
            <Tab.Panel>
              <div className="w-full overflow-x-auto">
                <table className="table-auto w-full border-collapse border">
                  <thead className="text-xs font-bold text-gray-600 uppercase border-b">
                    <tr>
                      <th className="py-2 px-1">Player</th>
                      <th className="py-2 px-1">Runs</th>
                      <th className="py-2 px-1">Balls</th>
                      <th className="py-2 px-1">4s</th>
                      <th className="py-2 px-1">6s</th>
                      <th className="py-2 px-1">SR</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-normal text-gray-700">
                    {batsmenBStats?.map((player, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        <td className="py-2 px-1 text-[#14b393] font-semibold">
                          {player.name}
                        </td>
                        <td className="py-2 px-1">{player.runs}</td>
                        <td className="py-2 px-1">{player.balls}</td>
                        <td className="py-2 px-1">{player.fours}</td>
                        <td className="py-2 px-1">{player.sixes}</td>
                        <td className="py-2 px-1">
                          {player.strikeRate.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-16 w-full overflow-x-auto">
                <table className="table-auto w-full border-collapse border">
                  <thead className="text-xs font-bold text-gray-600 uppercase border-b">
                    <tr>
                      <th className="py-2 px-1">Bowler</th>
                      <th className="py-2 px-1">O</th>
                      <th className="py-2 px-1">M</th>
                      <th className="py-2 px-1">R</th>
                      <th className="py-2 px-1">W</th>
                      <th className="py-2 px-1">Econ</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-normal text-gray-700">
                    {bowlerAStats?.map((bowler, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : ""}
                      >
                        <td className="py-2 px-1 text-[#0e7ae0] font-semibold">
                          {bowler.name}
                        </td>
                        <td className="py-2 px-1">{bowler.overs}</td>
                        <td className="py-2 px-1">{bowler.maidens}</td>
                        <td className="py-2 px-1">{bowler.runs}</td>
                        <td className="py-2 px-1">{bowler.wickets}</td>
                        <td className="py-2 px-1">
                          {bowler.economy.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Scoreboard;
