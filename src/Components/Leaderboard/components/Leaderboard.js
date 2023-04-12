import { Tab } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";

// import { playerInfo } from "../constant";
import LeaderboardStats from "./LeaderBoardStats";

import styles from "./leaderboard.module.css";

const LeaderBoard = ({ isLoading, playerInfo }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const [leaderBoards, setLeaderBoards] = useState(playerInfo);

  useEffect(() => {
    setLeaderBoards(playerInfo);
  }, [playerInfo]);

  const handleChanage = (e) => {
    const { value } = e.target;
    if (!!value) {
      const searchResult = playerInfo?.filter((search) => {
        return search?.name?.toLowerCase().includes(value.toLowerCase());
      });
      setLeaderBoards(searchResult);
    } else {
      setLeaderBoards(playerInfo);
    }
  };

  return (
    <div>
      <div className="max-w-full lg:h-[1020px]">
        <div className="flex flex-col justify-center text-sm md:text-xl lg:text-xl">
          <div className="lg:m-1 flex justify-center">
            <input
              className={
                "px-2 w-[60%] rounded-lg h-11 outline-none text-base	bg-inputBackground placeholder:text-light"
              }
              placeholder="Search Leaderboard"
              onChange={handleChanage}
              disabled={false}
            />
          </div>
          <LeaderboardStats
            leaderboardData={leaderBoards}
            isLoading={isLoading}
          />

          {/* <Tab.Group
            onChange={(index) => {
              setCurrentTab(index);
            }}
          >
            <Tab.List
              defaultValue={0}
              className={
                "m-0 flex items-center text-light justify-center gap-[60px] underline-offset-1  lg:m-4 "
              }
            >
              {tabLabelName?.map((tabs) => {
                return (
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected ? styles.selectedTabButton : styles.TabButton
                        }
                      >
                        {tabs}
                      </button>
                    )}
                  </Tab>
                );
              })}
            </Tab.List>
            <div className="lg:m-1 flex justify-center">
              <input
                className={
                  "px-2 w-[60%] rounded-lg h-11 outline-none text-base	bg-inputBackground placeholder:text-light"
                }
                placeholder="Search Leaderboard"
                onChange={handleChanage}
                disabled={false}
              />
            </div>

            <Tab.Panels className="lg:m-auto">
              <Tab.Panel>
                <div className="lg:m-10">
                  <LeaderboardStats leaderboardData={leaderBoards} />
                   <LeaderboardTable
                        leaderboardData={leaderBoards}
                        type={types}
                        loading={isLoading}
                        userPosition={leaderboardData?.myRank || {}}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group> */}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
