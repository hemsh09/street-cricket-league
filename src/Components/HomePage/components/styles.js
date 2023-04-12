const styles = () => ({
  promoContent: {
    width: "100%",
    display: "contents",
    padding: "60px 15px 100px 30px",
    left: 0,
    right: 0,
    "@media (max-width: 1024px)": {
      margin: "0px auto",
      padding: "0px 12px 40px 12px",
    },
  },
  textWrapper: {
    textAlign: "start",
    marginTop: "55px",
    "@media (max-width: 767px)": {
      textAlign: "center",
      marginTop: "0px",
    },
  },
  bannerWrapper: {
    // backgroundImage: `url(${promotion.src})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    display: "flex",
    // padding: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      flexDirection: "column",
      width: "100%",
      left: "0px",
    },
  },
  promoText: {
    paddingTop: "80px",
    paddingBottom: "30px",
    lineHeight: "72px",
    color: "#000",
    fontSize: "60px",
    fontWeight: "bold",
    "@media (max-width: 1024px)": {
      paddingTop: "0px",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
  subtitle: {
    marginTop: "21px",
    marginBottom: 48,
    // maxWidth: 400,
    color: "#aa4019",
    lineHeight: "25px",
    fontSize: 42,
    fontWeight: "bold",

    "@media (max-width: 1024px)": {
      marginBottom: 10,
      fontSize: 25,
      width: "100%",
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
    "@media (max-width: 360px)": {
      width: "100%",
    },
  },
  promotitle: {
    marginBottom: 10,
    color: "#FFE100",
    lineHeight: "25px",
    fontSize: 10,

    "@media (max-width: 430px)": {
      marginBottom: 12,
      fontSize: 12,
    },
  },
  accountButtonArea: {
    display: "flex",
    gap: "20px",
    "@media (max-width: 480px)": {
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "20px",
    },
    "@media (max-width: 767px)": {
      minWidth: 305,
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      minWidth: 305,
    },
  },
  freeDemoButton: {
    backgroundColor: "#25c4aa",
    padding: "14px 32px",
    color: "black",
    textTransform: "none",
    marginBottom: 38,
    fontWeight: "700",
    fontSize: "18px",
    "@media (max-width: 780px)": {
      marginBottom: 10,
      padding: 10,
    },
    "@media (max-width: 1024px)": {
      borderRadius: "6px",
      height: "48px",
      width: "100%",
      "& .MuiButton-label": {
        display: "flex",
        alignItems: "center",
      },
    },
    "& .MuiButton-endIcon": {
      marginLeft: 20,
      "@media (max-width: 480px)": {
        marginLeft: 12,
      },
    },

    "&:hover": {
      backgroundColor: "#3cdec3",
    },
    "& a": {
      textDecoration: "none",
    },
  },
  separateOr: {
    margin: 24,
    fontWeight: "bold",
    lineHeight: 0,
    "@media (max-width: 480px)": {
      margin: "0 auto",
      paddingBottom: "10px",
    },
  },
  startNowButton: {
    backgroundColor: "#22a4f4",
    padding: "14px 32px",
    color: "black",
    textTransform: "none",
    marginBottom: 38,
    fontWeight: "700",
    fontSize: "18px",
    "@media (max-width: 780px)": {
      marginBottom: 10,
      padding: 10,
    },
    "@media (max-width: 1024px)": {
      borderRadius: "6px",
      height: "48px",
      width: "100%",
      marginRight: 15,
      "& .MuiButton-label": {
        display: "flex",
        alignItems: "center",
      },
    },
    "& .MuiButton-endIcon": {
      marginLeft: 20,
      "@media (max-width: 480px)": {
        marginLeft: 12,
      },
    },

    "&:hover": {
      backgroundColor: "#5887e3",
    },
  },
  appStoreButton: {
    height: 49,
    width: 167,
    backgroundSize: "cover",
    marginRight: 12,
    backgroundRepeat: "no-repeat",
    "@media (max-width: 767px)": {
      marginTop: "20px",
      width: "50%",
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      marginTop: "0px",
    },
  },
  huaweiWrapper: {
    height: 49,
    width: 167,
    backgroundSize: "cover",
    marginLeft: "-10px",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 767px)": {
      marginTop: "20px",
      width: "50%",
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      marginTop: "0px",
    },
  },
  googlePlayButton: {
    height: 49,
    width: 167,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 767px)": {
      marginTop: "20px",
      width: "50%",
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      marginTop: "0px",
    },
  },
  promoImage: {
    position: "relative",
  },
  Iphone: {
    backgroundRepeat: "no-repeat",
    height: "70%",
    width: "22%",
    position: "absolute",
    top: "20%",
    right: "24%",
    backgroundSize: "contain",

    "@media (max-width: 1195px)": {
      height: "20rem",
    },
  },
  welcomeBonus: {
    borderRadius: 5,
  },
  storesButtonWrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: "-10px",
  },
  ImageOnTop: {
    "@media (max-width: 1024px)": {
      width: "100%",
      marginTop: "60px",
    },
  },
  buttonWithAppStore: {
    "@media (max-width: 767px)": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  },
});

export default styles;
