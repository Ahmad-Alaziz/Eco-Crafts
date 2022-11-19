import { useFormikContext } from 'formik';
import React from 'react';

import AppButton from '../button';

const AppSubmitButton = ({ text, style }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton text={text} onPress={handleSubmit} style={style} />;
};

export default AppSubmitButton;
