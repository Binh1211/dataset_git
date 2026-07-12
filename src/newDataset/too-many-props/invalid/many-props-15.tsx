import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  maxLength: number;
  minLength: number;
  pattern: string;
  required: boolean;
  disabled: boolean;
  autoFocus: boolean;
  id: string;
  name: string;
  className: string;
}

export interface InputRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
}

export const ManyProps15 = forwardRef<InputRef, Props>(({ value, onChange, placeholder, maxLength, minLength, pattern, required, disabled, autoFocus, id, name, className }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState(value);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => setInternalValue(''),
  }));
  return <input ref={inputRef} value={internalValue} onChange={e => setInternalValue(e.target.value)} placeholder={placeholder} maxLength={maxLength} minLength={minLength} pattern={pattern} required={required} disabled={disabled} autoFocus={autoFocus} id={id} name={name} className={className} />;
});