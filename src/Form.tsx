import {InputStyleProvider} from './InputStyleContext';
import {Input} from './Input';

export function Form() {
  return (
    <form>
      <InputStyleProvider variant='showRequireds'>
        <Input label='email' required />
        <Input label='name' required />
        <Input label='password' required />
      </InputStyleProvider>
      <InputStyleProvider variant='showOptionals'>
        <Input label='age' />
        <Input label='city' />
        <Input label='postcode' />
      </InputStyleProvider>
      <button type='submit'>submit</button>
    </form>
  );
}
