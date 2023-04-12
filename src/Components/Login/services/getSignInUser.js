import Cookies from 'js-cookie';

import api from '../../../api/config';
import getEnv from '../../../helpers/globalUtils/getEnv';
import whitelabelsettings from '../../../whitelabelsettings.json';

export const getSignInData = async (email, password, xDeviceId) => {
  try {
    const signInResponseData = await api.post(
      `User/login`,
      {
        email: email,
        password: password,
      },
      { withCredentials: true, headers: { 'x-device-id': xDeviceId } }
    );
    const {
      token,
      refreshToken,
      isTfaEnabled,
      tfaSid,
      mobile,
      firstName,
      lastName,
      isVerified,
      isDemo,
      isIdentityConfirmed,
      expiresIn,
    } = signInResponseData?.data;

    const SignInObject = {
      isAuth: !isTfaEnabled,
      isLoading: false,
      is2FAEnabled: isTfaEnabled,
      tfaSid,
      mobileLastFourDigits: mobile,
      firstName: firstName,
      lastName: lastName,
      isVerified: isVerified,
      isDemo: isDemo,
      isIdentityConfirmed: isIdentityConfirmed,
    };

    const AuthData = {
      token: token ? token : '',
      refreshToken,
      tokenExpiry: new Date().getTime() + expiresIn * 1000,
    };
    const env = getEnv();
    Cookies.set(`signInData-${env}`, JSON.stringify(SignInObject), {
      domain: whitelabelsettings.GLOBAL_URL.DOMAIN,
    });

    Cookies.set(`authToken-${env}`, JSON.stringify(AuthData), {
      domain: whitelabelsettings.GLOBAL_URL.DOMAIN,
    });
    return;
  } catch (err) {
    const env = getEnv();
    Cookies.remove(`signInData-${env}`, { domain: whitelabelsettings.GLOBAL_URL.DOMAIN });
    return {
      errors: err?.response?.data?.Message,
    };
  }
};
