import * as React from 'react';
import {GoToForm, GoToFormProps} from './Form';
import {GoToLabel, GoToLabelProps} from './Label';
import {GoToTextInput, GoToTextInputProps} from './TextInput';
import {useGoToForm, UseGoToFormConfig} from './useGoToForm';
import {PaginationModel} from '../types';

export interface GoToProps extends PaginationModel, UseGoToFormConfig {
  children?: React.ReactNode;
}

const GoToContext = React.createContext({} as ReturnType<typeof useGoToForm>);

export const GoTo = (props: GoToProps) => {
  const {children, inputId, state, events} = props;

  const goToContext = useGoToForm({state, events, inputId});
  return <GoToContext.Provider value={goToContext}>{children}</GoToContext.Provider>;
};

GoTo.Form = (props: GoToFormProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {formProps} = React.useContext(GoToContext);
  return <GoToForm {...formProps} {...props} />;
};

GoTo.TextInput = (props: GoToTextInputProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {inputProps} = React.useContext(GoToContext);
  return <GoToTextInput {...inputProps} {...props} />;
};

GoTo.Label = (props: GoToLabelProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {labelProps} = React.useContext(GoToContext);
  return <GoToLabel {...labelProps} {...props} />;
};
