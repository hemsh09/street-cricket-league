const styles = () => ({
  wrapper: {
    "& .MuiDialog-paperWidthSm": {
      backgroundColor: "white",
      maxWidth: 428,
      width: "100%",
      color: "black",
      padding: 32,
      borderRadius: 15,
      "@media (max-width: 1024px)": {
        padding: 20,
      },
    },
    "& .MuiDialog-paper": {
      "@media (max-width:1024px)": {
        margin: 15,
      },
    },
  },
  closeButton: {
    color: "white",
  },
  header: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  modalContent: {
    overflow: "hidden",
    padding: 0,
  },
  inputWrapper: {
    marginBottom: 24,
    marginTop: "30px",
    "&:last-of-type": {
      marginBottom: 16,
    },
  },
  submitButton: {
    backgroundColor: "blue",
    color: "white",
    padding: "13px 8px",
    textTransform: "none",
    margin: "16px 0",

    "&:hover": {
      background: `blue`,
      color: "#FFFFFF",
    },

    "&:disabled": {
      background: "rgba(48, 105, 221, 0.14)",
      color: "white",
    },
  },
  textButton: {
    color: "black",
    background: "rgba(231, 255, 34)",
    textTransform: "none",
    padding: 0,
    marginLeft: "5px",
    margin: "auto",
    "&:nth-child(2n + 2)": {
      margin: 0,
      marginLeft: "5px",
    },
  },
  buttonSubTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    "@media (max-width:1024px)": {
      marginTop: 30,
    },
  },
  errorText: {
    color: "black",
    textAlign: "center",
    margin: "10px 0",
  },
  mainWrapper: {
    maxWidth: 1440,
    width: "100%",
    margin: "0 auto",
    color: "white",
    position: "relative",
    backgroundSize: "contain",
    backgroundColor: "white",
  },
  logo: {
    padding: "20px 130px",
    backgroundColor: "white",
    cursor: "pointer",
  },
  formWrapper: {
    "& button": {
      display: "flex",
      justifyContent: "center",
      "&:nth-child(2n + 1)": {
        "@media (max-width: 1024px)": {
          marginTop: "10px",
        },
      },
    },
    width: "100%",
    margin: "50px auto",
    maxWidth: 650,
    marginTop: "30px",
    background: "white",
    borderRadius: 5,
    "@media (max-width: 767px)": {
      background: "none",
      width: "100% !important",
      padding: "15px !important",
    },
    "@media (max-width: 1024px)": {
      width: "80%",
    },
  },
  emailError: {
    textAlign: "start",
    fontSize: "14px",
    color: "red",
  },
  title: {
    textAlign: "center",
    color: "black",
    paddingBottom: 20,
    paddingTop: 20,
    fontSize: 28,
    fontWeight: "bold",
    "@media (max-width: 767px)": {
      borderBottom: "none",
      fontSize: 18,
      textAlign: "left",
      paddingBottom: "5px",
    },
  },
  fieldArea: {
    padding: "40px 60px",
    "@media (max-width: 767px)": {
      padding: 0,
    },
  },
  footerLogoWrapper: {
    "& svg": {
      "& path": {
        fill: `${"white"}`,
      },
    },
    paddingLeft: "130px",
    paddingBottom: "20px",
    cursor: "pointer",
    "@media (max-width: 1024px)": {
      display: "flex",
      justifyContent: "start",
      padding: "15px",
      "& svg": {
        width: "100%",
      },
    },
  },
  titleWrapper: {
    borderBottom: `1px solid green`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxWrapper: {
    height: "100%",
    paddingTop: "30px",
  },
});

export default styles;
