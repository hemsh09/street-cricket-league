const styles = (theme) => ({
  wrapper: {
    fontFamily: "Montserrat, sans-serif",
    display: "flex",
    alignItems: "center",
    "& button": {
      textTransform: "none",
      padding: 0,
      marginRight: 25,
      minWidth: "inherit",
      fontWeight: "bold",

      "@media (max-width: 945px)": {
        marginRight: 0,
        marginBottom: 16,
      },
      "@media screen and (min-width: 1025px) and (max-width: 1480px)": {
        marginRight: 0,
        padding: "0px 8px",
      },
    },
    "@media (max-width: 1024px)": {
      display: "none",
    },

    "@media (max-width: 945px)": {
      flexDirection: "column",
    },
  },
  blackText: {
    color: theme.palette.black,
  },
  whiteText: {
    color: theme.palette.white,
  },
});

export default styles;
