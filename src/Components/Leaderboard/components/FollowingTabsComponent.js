import React from "react";
import { FaPlus } from "react-icons/fa";

const FollowingTabsComponent = ({ dataList }) => {
  return (
    <div>
      {dataList.map((item) => {
        return (
          <div
            key={item.userName}
            className="lg:m-10 py-4 flex text-light border-b border-grays justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                className="w-8 h-8"
                src={item.image ? item.image : "/images/assets/userIcon.png"}
                alt="User Icon"
              />
              <div className="font-semibold">{item.userName}</div>
              <img className="w-8 h-8" src="/images/assets/medal.png" />
            </div>
            <button className="flex justify-center lg:w-[122px] h-[35px] bg-[#F7F7F7] items-center p-2 rounded-md">
              {item.isFollowing ? (
                <div className="flex items-center">
                  <FaPlus className="mr-2 text-purple-700" />
                  <div className="bg-theme font-semibold bg-clip-text text-transparent">
                    <div>Follow</div>
                  </div>{" "}
                </div>
              ) : (
                <div className="bg-theme font-semibold bg-clip-text text-transparent">
                  <div>Following</div>
                </div>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowingTabsComponent;
