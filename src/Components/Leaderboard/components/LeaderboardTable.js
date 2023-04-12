import _ from "lodash";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GET_LEADERBOARD_REQUEST } from "../actions";
import { priceFormatWithIcon, percentRateFormat, getRankMedal } from "../constant/utils";
import userIcon from '../../../static/images/userIconLeaderboard.svg'

import styles from "../components/leaderboard.module.css";

const dataKeys = ["#", "Name", "Profile Made"];

const LeaderboardTable = ({ leaderboardData, type, loading, userPosition }) => {
  const dispatch = useDispatch();

  const [scrollProgress, setScrollProgress] = useState(0)
  const { token } = useSelector((state) => state.auth);

  const data = { type, token }

  const myRank = useMemo(() => {
    return userPosition?.rank
  }, [userPosition])

  useEffect(() => {
    dispatch(GET_LEADERBOARD_REQUEST(data));
  }, []);


  const rankingComponent = (rank, customStyle) => {
    return <td className={customStyle}>
      <div className="">{rank}</div>
    </td>
  }

  const profileMadeComponent = (percent, customStyle) => {
    return <td className={customStyle}>
      <div className="text-bull"> {percentRateFormat(percent)} </div>
    </td>
  }
  const PnLComponent = (PnL, customStyle) => {
    return <td className={customStyle}>
      <div className={`${PnL > 0 ? 'text-bull' : 'text-bear'}`}>{priceFormatWithIcon(PnL)}</div>
    </td>
  }

  const userNameComponent = (userRank, userName, userImage) => {
    const badgeImage = getRankMedal(userRank) || ''
    return <div className="flex gap-4 items-center justify-start ">
      <div className="w-8 h-8 overflow-hidden rounded-[50%] bg-dark">
        <img src={userImage ? userImage : userIcon.src} alt="User Icon" />
      </div>
      <div className="flex text-[12px] text-light items-center font-semibold lg:text-[18px] text-left min-w-[75px]">
        {userName}
      </div>
      {badgeImage && <img src={badgeImage} width={28} />}
    </div>
  }

  const MyRankComponent = () => {
    const rankInRange = !(_.inRange(myRank, 1, 10))
    return (
      leaderboardData?.length > 0 && (
        <>
          {rankingComponent(myRank, styles.userAssetNumber)}

          <td className={`${styles.userAssetName} ${rankInRange && 'sticky'}`}>
            {userNameComponent(myRank, userPosition?.userName, userPosition?.profileImage)}
          </td>

          {profileMadeComponent(userPosition?.roi, styles.assetNumber)}

          {/* {PnLComponent(pnl, styles.assetNumber)} */}
        </>
      )
    )
  }

  const handleScroll = (event) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;

    const scrollTop = event.currentTarget.scrollTop;
    const totalScroll = ((scrollTop + containerHeight) / scrollHeight) * 100
    setScrollProgress(totalScroll)
  };

  return (
    <div>
      {
        !loading ?
          <>
            {leaderboardData?.length > 0 ? (
              <div className={styles.container} onScroll={handleScroll}>
                <table className={styles.TableWrapper}  >
                  <thead className={styles.tableHeadWrapper}>
                    <tr className="flex justify-between lg:table-row">
                      {dataKeys.map((key, index) => (
                        <th className={styles.tableHead} key={index}>
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className={`text-gray-700 font-semibold dark:text-gray-400`}>
                    {leaderboardData?.map((item, index) => {
                      const { rank, userName, profileImage } = item

                      return (
                        <tr key={item.rank} className={styles.rowWrapper}>
                          {
                            item.rank == myRank && _.inRange(myRank, 1, 10) ?
                              MyRankComponent() :
                              <>

                                {rankingComponent(rank, styles.assetNumber)}

                                <td className={styles.assetName}>
                                  {userNameComponent(rank, userName, profileImage)}
                                </td>

                                {profileMadeComponent(item.roi, styles.assetNumber)}

                                {/* {PnLComponent(pnl, styles.assetNumber)} */}
                              </>
                          }
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-light text-[20px] font-bold">No Result found</div>
            )}

            {
              (scrollProgress > 12 || !(_.inRange(myRank, 1, 10))) && myRank && !!leaderboardData?.length ? <div className="bg-theme p-[1px] px-[0px]">
                <tr className={styles.assetWrapper}>
                  {MyRankComponent()}
                </tr>
              </div> : null
            }
          </>
          :
          <div className="text-light text-[20px] font-bold">Loading... </div>
      }
    </div>
  );
};

export default LeaderboardTable;