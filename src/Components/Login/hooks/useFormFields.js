import { useState } from 'react';

export default (initialState) => {
  const [fields, setValue] = useState({ ...initialState });

  const handleFieldsChange = (event, value, specificField) => {
    const maxLength = 255;
    if (specificField) {
      return setValue({
        ...fields,
        [specificField]: value,
      });
    }

    if (event.target.type === 'checkbox') {
      return setValue({
        ...fields,
        [event.target.name]: event.target.checked,
      });
    }

    if (event.target.value.length < maxLength) {
      return setValue({
        ...fields,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleReset = () => {
    setValue({ ...initialState });
  };

  const handleResetState = (updateState) => {
    setValue({ ...updateState });
  };
  return [fields, handleFieldsChange, handleReset, handleResetState];
};
