import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useAuthContext } from "../../../../context/context";
import ProfileBackground from "../../../static/Images/profileBackground.jpg";
import userImage from "../../../static/Images/userImage.png";
import { getUserInfo } from "../services";

const Profile = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState();
  const [loading, setIsLoading] = useState();
  const { auth } = useAuthContext();
  useEffect(() => {
    const body = {
      email: "test@email.com",
    };
    getUserInfo(setUserInfo, setIsLoading, body);
  }, []);

  useEffect(() => {
    if (!auth) {
      router.push("/");
    }
  }, [auth, router]);

  return (
    <div className="">
      <Image
        height={3000}
        className=""
        src={ProfileBackground}
        alt="Background"
      />
      <div className="bg-white w-full lg:w-3/4 m-auto lg:absolute lg:top-[300px] lg:left-[14%] h-[670px] lg:h-[600px] mb-5">
        <div className="bg-[#db8be4] relative top-[-50px] rounded-[50%] h-40 w-40 flex items-center justify-center m-auto">
          <Image
            height={80}
            width={80}
            src={userImage}
            className=""
            alt="User Icon"
          />
        </div>
        <div>
          <div className="text-[40px] font-bold mb-2">{userInfo?.name}</div>
          <div className="text-[24px] mb-2">{userInfo?.address}</div>
          <div className="text-[20px] mb-10">{userInfo?.email}</div>
          <div className="flex justify-center gap-5 pb-8 border-b">
            <button
              className="bg-[#11cdef] text-[#FFF] p-2 w-20 hover:scale-110"
              onClick={() => router.push("/profile/edit")}
            >
              Edit
            </button>
            <button
              className="bg-[#172b4d] text-[#FFF] p-2 w-24 hover:scale-110"
              onClick={() => router.push("/market")}
            >
              Explore
            </button>
          </div>
          <div className="mt-8">
            Explore a considerable range of products, performs and records all
            of his games, giving it a warm, intimate feel with a solid groove
            structure. A Player of considerable range.
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
