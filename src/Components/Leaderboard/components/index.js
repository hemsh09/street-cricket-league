import React, { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";

// import Footer from "../../../common/footer";
// import Navbar from "../../../common/navbar";
import styles from "./leaderboard.module.css";
import Leaderboard from "./Leaderboard";
// import RecentTrades from "./RecentTrades";
// import Following from "./Following";

const LeaderBoardLayout = ({ isLoading, playerInfo }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const TabsComponent = [
    { tab: <Leaderboard isLoading={isLoading} playerInfo={playerInfo} /> },
    { tab: <Leaderboard isLoading={isLoading} playerInfo={playerInfo} /> },
    { tab: <Leaderboard isLoading={isLoading} playerInfo={playerInfo} /> },
    // { tab: <Following /> },
    // { tab: <RecentTrades /> },
  ];

  return (
    <div>
      <div className="bg-dark">
        {/* <Navbar /> */}
        <h3 className="pt-5 flex  text-light text-3xl font-bold	 justify-center">
          Leaderboard
        </h3>
        <div className="flex flex-col justify-center text-sm md:text-xl lg:text-xl">
          <Tab.Group onChange={(index) => index}>
            <Tab.List
              defaultValue={currentTab}
              className="m-0 flex items-center text-light justify-center gap-[60px] underline-offset-1  lg:m-4"
            >
              {["Batsmen", "Bowler", "All Rounder"].map((tab) => {
                return (
                  <Tab key={tab} as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected ? styles.selectedTabButton : styles.TabButton
                        }
                      >
                        {tab}
                      </button>
                    )}
                  </Tab>
                );
              })}
            </Tab.List>
            <Tab.Panels className="lg:m-auto">
              {TabsComponent?.map((tabComp) => {
                return (
                  <Tab.Panel key={tabComp.tab}>
                    <div className="m-4 lg:m-10 lg:min-w-[630px]">
                      {tabComp.tab}
                    </div>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardLayout;
