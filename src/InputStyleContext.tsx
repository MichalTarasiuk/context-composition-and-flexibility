import {createContext, useContext} from 'react';

import type {ReactNode} from 'react';
import type {Variant} from './types';

const InputStyleContext = createContext<string | null>(null);

type InputStyleProviderProps = {
  children: ReactNode;
  variant?: Variant;
};

export function InputStyleProvider({
  children,
  variant = 'none',
}: InputStyleProviderProps) {
  return (
    <InputStyleContext.Provider value={variant}>
      {children}
    </InputStyleContext.Provider>
  );
}

export const useInputStyleContext = () => {
  const context = useContext(InputStyleContext);

  if (context === null) {
    throw Error(
      'useInputStyleContext must be used within a InputStyleProvider',
    );
  }

  return context;
};
