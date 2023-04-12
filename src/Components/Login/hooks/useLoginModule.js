import { useCallback, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { isAllValuesNotEmpty, isInputNotEmpty } from '../../../helpers/validation';
import useFormFields from './useFormFields';
import {
  CALL_BEFORE_LOGIN,
  RESET_PASSWORD,
  SIGN_IN,
} from '../../../commonComponents/Header/actions';
import GetTokenId from '../../../commonComponents/Layouts/MainLayout/getTokenId';

export default () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [deviceToken, setDeviceToken] = useState('');

  const [loginModalFormValues, changeFormValues] = useFormFields({
    email: '',
    password: '',
  });
  const [isLoginModalOpen, toggleModalOpen] = useState(false);
  const [isForgotPasswordMode, toggleLoginModalMode] = useState(false);
  const handleLoginModalOpen = useCallback(() => {
    router.push('/login');
  }, []);

  const handleToggleModalMode = useCallback(() => {
    toggleLoginModalMode((state) => !state);
  }, []);

  const handleLoginModalSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { email: emailAddress, password } = loginModalFormValues;

      if (isForgotPasswordMode) {
        return dispatch(RESET_PASSWORD(emailAddress));
      }
      dispatch(CALL_BEFORE_LOGIN());
      return dispatch(SIGN_IN({ email: emailAddress, password, xDeviceId: deviceToken }));
    },
    [loginModalFormValues, isForgotPasswordMode, dispatch]
  );

  const isAllLoginFieldsFilledIn = useMemo(
    () => isAllValuesNotEmpty(loginModalFormValues),
    [loginModalFormValues]
  );

  const isEmailEntered = useMemo(
    () => isInputNotEmpty(loginModalFormValues.email),
    [loginModalFormValues.email]
  );

  useEffect(() => {
    deviceToken?.length === 0 && GetTokenId(setDeviceToken);
  }, []);

  return {
    isLoginModalOpen,
    handleLoginModalOpen,
    toggleModalOpen,
    loginModalFormValues,
    changeFormValues,
    isForgotPasswordMode,
    handleToggleModalMode,
    handleLoginModalSubmit,
    isAllLoginFieldsFilledIn,
    isEmailEntered,
  };
};
