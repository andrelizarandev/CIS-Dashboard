// Modules
import { useState } from 'react'

// Types
import { OnChangeEvent } from './types';

export default function useHandleForm (initialState:any) {

  const [form, setForm] = useState(initialState);

  function handleOnChange (e:OnChangeEvent) {
    const { value, name } = e.target;
    setForm({ ...form, [name]:{ value, error:null }});
  }

  function handleOnChangeWithoutErrorManage (e:OnChangeEvent) {
    const { value, name } = e.target;
    setForm({ ...form, [name]:value });
  }

  return {
    form, 
    setForm,
    handleOnChange,
    handleOnChangeWithoutErrorManage
  }
  
}
