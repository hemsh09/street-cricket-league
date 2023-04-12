import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HomePageLayout = dynamic(() => import("../components"));

const HomePageContainer = () => {
  return <HomePageLayout />;
};

export default HomePageContainer;
