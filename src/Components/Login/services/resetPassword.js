import api from '../../../api/config';

export const getResetPassword = async (email) => {
  try {
    const resetPassword = await api.post('User/resetpassword', { email });
    return {
      data: resetPassword?.data,
    };
  } catch (err) {
    return {
      data: [],
    };
  }
};
