const styles = (theme) => ({
  wrapper: {
    background: "white",
    // marginBottom: 20,
    padding: "18px 100px",
    color: theme.palette.white,

    "@media (max-width: 1195px)": {
      padding: "18px 40px",
    },

    "@media (max-width: 430px)": {
      marginBottom: 0,
    },

    "@media (max-width: 767px)": {
      padding: "18px 15px",
    },
  },
  signOut: {
    padding: "10px",
    // border: `2px solid ${theme.palette.azul}`,
    fontWeight: "bold",
    marginLeft: "5px",
    "&:hover": {
      background: "#f5535399",
    },
  },
  profile: {
    fontWeight: "bold",
    marginLeft: "5px",
  },
  headerWithBackground: {
    width: "100%",
    margin: "0 auto",
    position: "fixed",
    maxWidth: "1440px",
    zIndex: "999",
    backgroundColor: theme.palette.white,
    marginBottom: 0,
    borderBottom: "1px solid black",
    "@media (max-width: 1024px)": {
      backgroundColor: "#171719",
      borderBottom: "none",
    },
  },
  subWrapper: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      width: "100%",
      justifyContent: "space-between",
    },
  },
  homeLogo: {
    width: 107,
    height: 42,
  },
  normalLogo: {
    width: 145,
    height: 12,
  },
  logoWrapper: {
    width: "190px",
    height: "28px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    marginRight: 25,
    cursor: "pointer",
    "@media screen and (min-width: 1025px) and (max-width: 1450px)": {
      marginRight: 15,
    },
    "@media (max-width: 1024px)": {
      margin: "0 auto",
      width: "170px",
      height: "auto",
    },
  },
  authBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: 5,
    flex: 1,
    justifyContent: "space-evenly",
  },
  loginButton: {
    border: `2px solid ${theme.palette.tealish}`,
    // backgroundColor: `${theme.palette.tealish} !important`,
    color: `${theme.palette.black} !important`,
    textTransform: "none !important",
    padding: "7px 38px !important",
    marginRight: "16px !important",
    fontWeight: "bold",
    "@media screen and (min-width: 1025px) and (max-width: 1450px)": {
      padding: "7px 20px !important",
    },
    "&:hover": {
      backgroundColor: "#3cdec3 !important",
    },
  },
  MobileloginButton: {
    backgroundColor: `${theme.palette.tealish} !important`,
    color: `${theme.palette.white} !important`,
    textTransform: "none !important",
    padding: "4px 18px !important",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#3cdec3 !important",
    },
  },
  signUpButton: {
    padding: "8px 38px !important",
    border: `2px solid ${theme.palette.azul}`,
    textTransform: "none !important",
    color: `${theme.palette.black} !important`,
    fontWeight: "bold",
    "@media (max-width: 430px)": {
      padding: "8px 21px !important",
    },
    "@media (max-width:1024px)": {
      display: "none",
    },

    "&:hover": {
      backgroundColor: "#5887e3 !important",
    },
  },
  statItemSubtitle: {
    fontSize: 10,
    textAlign: "center",
  },
  indicatorWrapper: {
    alignSelf: "end",
    "@media (max-width:1024px)": {
      marginRight: "10px",
    },
  },
  addButton: {
    textTransform: "none !important",
    color: `${theme.palette.white} !important`,
    background: "#3069DD !important",
    maxWidth: 85,
    width: "100%",
    maxHeight: 32,
    fontSize: 10,
    "& svg": { height: 6, width: 6 },

    "&:hover": {
      background: "#3069DD !important",
      opacity: "0.80",
    },
  },
  buttonsWrapper: {
    display: "flex",
    alignItems: "center",
  },
  mobileHamBurger: {
    padding: "0",
  },
  headerInsideBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationIcon: {
    color: "white",
  },
  navDrop: {
    marginLeft: "10px",
  },
});

export default styles;
