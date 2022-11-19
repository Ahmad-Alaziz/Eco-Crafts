import { useFormikContext } from 'formik';
import React from 'react';

import AppErrorMessage from './AppErrorMessage';
import AppTextInput from './AppTextInput';

const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        autoCorrect={false}
        autoCapitalize="none"
        value={values[name] || ''}
        width={width}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
