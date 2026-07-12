import React, { forwardRef, useImperativeHandle, useRef } from 'react';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled: boolean;
  required: boolean;
  pattern: string;
  maxLength: number;
  minLength: number;
  className: string;
  style: React.CSSProperties;
}

export const ManyProps5 = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, placeholder, disabled, required, pattern, maxLength, minLength, className, style }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);
    return <input ref={inputRef} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} required={required} pattern={pattern} maxLength={maxLength} minLength={minLength} className={className} style={style} />;
  }
);