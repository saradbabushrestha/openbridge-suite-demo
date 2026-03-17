import * as React from 'react';
import { cn } from '../../lib/cn';

export type OpenBridgeFrameProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  rightAdornment?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const panelStyle: React.CSSProperties = {
  background: 'linear-gradient(180deg, #1c2330 0%, #111722 100%)',
  border: '1px solid #364053',
  borderRadius: 10,
  padding: 12,
  color: '#f7f7f7',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
};

const headRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: 12,
  marginBottom: 10,
};

const titleStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: '#d9dee7',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: 12,
  color: '#8da0bf',
  marginTop: 2,
};

const footerStyle: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12,
  color: '#8da0bf',
};

export function OpenBridgeFrame({ title, subtitle, footer, rightAdornment, className, style, children }: OpenBridgeFrameProps) {
  return (
    <section className={cn('ob-frame', className)} style={{ ...panelStyle, ...style }}>
      {(title || subtitle || rightAdornment) ? (
        <header style={headRowStyle}>
          <div>
            {title ? <div style={titleStyle}>{title}</div> : null}
            {subtitle ? <div style={subtitleStyle}>{subtitle}</div> : null}
          </div>
          {rightAdornment ? <div>{rightAdornment}</div> : null}
        </header>
      ) : null}
      <div>{children}</div>
      {footer ? <footer style={footerStyle}>{footer}</footer> : null}
    </section>
  );
}

export default OpenBridgeFrame;
