const styles = (theme) => ({
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: '#282831',
      color: theme.palette.white,
    },
  },
  mobileHamBurger: {
    padding: '0',
  },
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.tealish,
    },
  },
});

export default styles;
