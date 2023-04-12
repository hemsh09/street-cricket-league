import React, { useState, Fragment, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

import FollowingTabsComponent from "./FollowingTabsComponent";

import styles from "./leaderboard.module.css";

const Following = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const { following, followers } = useSelector(
    (state) => state.leaderboardReducer
  ) || {}
  const [follow, setFollow] = useState([]);

  useEffect(() => {
    setFollow(currentTab === 0 ? followers : following);
  }, [followers, following, currentTab]);

  const handleSearchFollow = (e, data) => {
    const { value } = e.target;
    if (!!value) {
      const searchResult = data.filter((search) => {
        return search?.userName?.toLowerCase().includes(value.toLowerCase());
      });
      setFollow(searchResult);
    } else {
      setFollow(data);
    }
  };

  return (
    <div className="flex flex-col justify-center text-sm md:text-xl lg:text-xl">
      <Tab.Group
        selectedIndex={currentTab}
        onChange={(index) => setCurrentTab(index)}
      >
        <Tab.List
          // defaultValue={currentTab}
          className="m-0 flex items-center text-light justify-center gap-[60px] underline-offset-1  lg:m-4"
        >
          {[
            `${followers?.length} Followers`,
            `${following?.length} Following`,
          ].map((tab, index) => {
            return (
              <Tab key={index} as={Fragment}>
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
        <Tab.Panels className="lg:m-auto lg:min-w-[700px] lg:min-h-[300px]">
          <Tab.Panel>
            <div className="m-4 flex justify-center">
              <input
                className="text-[15px] text-dark bg-[#F7F7F7] font-semibold pl-2"
                placeholder="Search Users"
                onChange={(e) => handleSearchFollow(e, followers)}
              />
            </div>
            <FollowingTabsComponent dataList={follow} />
          </Tab.Panel>
          <Tab.Panel>
            <div className="m-4 flex justify-center">
              <input
                className="text-[15px] text-dark bg-[#F7F7F7] font-semibold pl-2"
                placeholder="Search Users"
                onChange={(e) => handleSearchFollow(e, following)}
              />
            </div>
            <FollowingTabsComponent dataList={follow} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Following;
