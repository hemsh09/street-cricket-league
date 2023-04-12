import React from "react";

import LoginModal from "../components/LoginModal";

const LoginContainer = () => {
  const [isForgotPasswordMode, toggleLoginModalMode] = useState(false);
  const handleToggleModalMode = useCallback(() => {
    toggleLoginModalMode((state) => !state);
  }, []);
  return (
    <LoginModal
      isForgotPasswordMode={isForgotPasswordMode}
      handleToggleModalMode={handleToggleModalMode}
    />
  );
};

export default LoginContainer;
