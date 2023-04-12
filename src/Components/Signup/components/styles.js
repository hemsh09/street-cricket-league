const styles = () => ({
  formWrapper: {
    position: "relative",
    top: "40px",
    border: "1px solid black",
    padding: "40px",
    backgroundColor: "#fff",
    width: "40%",
    margin: "auto",
    marginBottom: "20px",
    "@media (max-width: 1024px)": {
      width: "100%",
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "16px",
  },
  formField: {
    padding: "5px",
    marginBottom: "10px",
    border: "1px solid black",
    width: "55%",
  },
  errorField: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  signUpButton: {
    border: "2px solid #f25fa0",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#edbbd1",
    },
  },
  nameWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  formFieldWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signupSuccess: {
    fontSize: "18px",
    fontWeight: 600,
  },
});

export default styles;
