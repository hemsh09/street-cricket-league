const styles = () => ({
  globeIcon: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },

  menuWrap: {
    '& .MuiMenu-paper ul': {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      width: '250px',
    },
  },
  buttonWrapOne: {
    fontWeight: '700',
    textTransform: 'capitalize',
    color: '#000000',
  },
  buttonWrapTwo: {
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    '& svg': {
      fill: '#FFFFFF',
    },
  },
});

export default styles;
