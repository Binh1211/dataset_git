import React from 'react';

type Variant = 'primary' | 'secondary' | 'danger' | 'warning';

interface BaseProps {
  variant: Variant;
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  className: string;
  style: React.CSSProperties;
}

interface LinkProps {
  href: string;
  target?: '_blank' | '_self';
}

interface ButtonProps {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

type Props = BaseProps & (LinkProps | ButtonProps) & {
  children: React.ReactNode;
  ariaLabel: string;
  role: string;
};

export const ManyProps9 = (props: Props) => {
  const { variant, size, disabled, loading, fullWidth, className, style, children, ariaLabel, role } = props;
  return <button className={className} style={style} disabled={disabled || loading} aria-label={ariaLabel} role={role}>{children}</button>;
};