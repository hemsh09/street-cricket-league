const styles = (theme) => ({
  inputWrapper: {
    position: 'relative',
  },
  inputField: {
    background: '#53d5fc',
    padding: 10,
    width: '80%',
    borderRadius: '10px',
    marginTop: '10px',
  },
  label: {
    color: '#FFFFFF',
  },
  input: {
    '& .MuiInputBase-input, .MuiInputLabel-animated': {
      color: theme.palette.text.primary,

      '&:disabled': {
        color: 'rgba(255,255,255, 0.4)',
      },
    },
    '& .MuiInputBase-input::placeholder': {
      color: theme.palette.text.primary,
    },
    '& .MuiInput-underline:after, .MuiInput-underline:before': {
      borderWidth: 2,
      borderColor: 'rgba(167,162,248, 0.02)',
    },
  },
  errorBlock: {
    position: 'absolute',
    fontSize: 12,
    bottom: -40,
    color: '#e9334a',
    minHeight: 35,
  },
  customforUserDashboard: {
    width: '80%',
    padding: 10,
    background: '#53d5fc',
    marginTop: 10,
    borderRadius: 10,
    '&:hover::before': {
      borderBottom: 'none !important',
    },
    '&:before': {
      borderBottom: 'none !important',
    },

    '&:after': {
      borderBottom: 'none !important',
    },
  },
  showIcon: {
    cursor: 'pointer',
    height: 20,
    width: 25,
  },
});

export default styles;
