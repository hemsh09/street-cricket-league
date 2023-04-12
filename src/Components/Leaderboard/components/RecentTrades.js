import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { GET_RECENT_TRADES_REQUEST } from "../actions";

const RecentTrades = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(GET_RECENT_TRADES_REQUEST());
  }, []);
  const { recentTrades = [] } = useSelector((state) => state.leaderboardReducer)  || {}

  return (
    <div>
      {recentTrades.length > 0 ? (
        recentTrades.map((item) => {
          return (
            <div
              key={item.userName}
              className="flex mt-16 p-[10px] flex-col gap-10 text-light"
            >
              <div className="flex items-center justify-start gap-14 lg:justify-between ">
                <div className="flex items-center gap-5 lg:gap-10">
                  <img
                    src={
                      item.profileImage
                        ? item.profileImage
                        : "/images/assets/recentUserIcon.png"
                    }
                  />
                  <div className="font-semibold">{item.userName}</div>
                  <div className="bg-theme p-[1px] rounded-md">
                    <button className="flex h-[30px] items-center bg-dark p-2 rounded-md">
                      <FaPlus className="mr-2 text-purple-700" />
                      <div className="bg-theme font-semibold bg-clip-text text-transparent">
                        <div className="text-[15px]">Following</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div>
                  <button>
                    <img src="/images/assets/horizontalCircles.svg" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="font-semibold">Sold</div>
                <div>{item.assetName}</div>
                <div className="font-semibold">@ {item.price}</div>
              </div>
              <div className="flex font-semibold items-center border-l-[4px] border-solid border-[#619BFF] rounded-md gap-5 bg-tertiary h-[60px] sm:w-[75%]">
                <img
                  className="rounded-[50px] border-[1px] border-solid border-dark ml-2 w-8 h-8 rounded-br-[2px]"
                  src={
                    item.image
                      ? item.image
                      : "/images/assets/recentUserIcon.png"
                  }
                />
                <div className="text-[#619BFF]">{item.assetName}:</div>
                <div>Sell @</div>
                <div>${item.price}</div>
              </div>
              <div className="border-b text-lightishGrey font-semibold border-grays pb-5">
                {item.likes} Likes
              </div>
              <div className="flex items-center">
                <img
                  className="h-[16px] w-[16px] mr-3"
                  src="/images/assets/Heart.png"
                />
                <div className="text-bear">Liked</div>
              </div>
            </div>
          );
        })
      ) : (
        // <div className="flex flex-col gap-10 text-light">
        //   <div className="flex items-center justify-between ">
        //     <div className="flex items-center gap-10">
        //       <img src="/images/assets/recentUserIcon.png" />
        //       <div className="font-semibold">@gail.forcewind</div>
        //       <div className="bg-theme p-[1px] rounded-md">
        //         <button className="flex items-center bg-dark p-2 rounded-md">
        //           <FaPlus className="mr-2 text-purple-700" />
        //           <div className="bg-theme font-semibold bg-clip-text text-transparent">
        //             <div>Following</div>
        //           </div>
        //         </button>
        //       </div>
        //     </div>
        //     <div>
        //       <button>
        //         <img src="/images/assets/horizontalCircles.svg" />
        //       </button>
        //     </div>
        //   </div>
        //   <div className="flex items-center gap-5">
        //     <div className="font-semibold">Sold</div>
        //     <div>Bruno Fernandes</div>
        //     <div className="font-semibold">@38.16</div>
        //   </div>
        //   <div className="flex font-semibold items-center border-l-[4px] border-solid border-[#619BFF] rounded-md gap-5 bg-tertiary h-[60px] w-[75%]">
        //     <img
        //       className="rounded-[50px] border-[1px] border-solid border-dark ml-2 w-8 h-8 rounded-br-[2px]"
        //       src="/images/assets/recentUserIcon.png"
        //     />
        //     <div>Bruno Fernandes:</div>
        //     <div>Sell @</div>
        //     <div>$38.16</div>
        //   </div>
        //   <div className="border-b text-lightishGrey font-semibold border-grays pb-5">
        //     3.7k Likes
        //   </div>
        //   <div className="flex items-center">
        //     <img
        //       className="h-[16px] w-[16px] mr-3"
        //       src="/images/assets/Heart.png"
        //     />
        //     <div className="text-bear">Liked</div>
        //   </div>
        // </div>
        <div className="text-light font-semibold flex justify-center items-center">
          Loading...
        </div>
      )}
    </div>
  );
};

export default RecentTrades;
