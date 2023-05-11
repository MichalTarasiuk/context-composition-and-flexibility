import {useId} from 'react';

import {useInputStyleContext} from './InputStyleContext';

type InputProps = {
  label: string;
  required?: boolean;
};

export function Input({label, required = false}: InputProps) {
  const id = useId();
  const variant = useInputStyleContext();

  const getHelperText = () => {
    if (variant === 'showOptionals' && !required) return ' (optional)';
    if (variant === 'showRequireds' && required) return '*';

    return null;
  };

  return (
    <div>
      <label htmlFor={id}>
        {label}
        {getHelperText()}
      </label>
      <input id={id} required={required} />
    </div>
  );
}
