import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import dynamic from "next/dynamic";


const MainLayout = dynamic(() => import("./MainLayout"));

const LayoutWrapper = ({ children }) => {
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MainLayout>{children}</MainLayout>
      </MuiPickersUtilsProvider>
  );
};

export default LayoutWrapper;
