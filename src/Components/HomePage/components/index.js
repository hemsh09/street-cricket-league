import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Promotion = dynamic(() => import("./Banner"));

const HomePageLayout = ({}) => {
  return (
    <>
      <Promotion />
    </>
  );
};

export default React.memo(HomePageLayout);
