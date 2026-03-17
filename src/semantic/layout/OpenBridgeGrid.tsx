import * as React from 'react';

export type OpenBridgeGridProps = {
  minColumn?: number;
  gap?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export function OpenBridgeGrid({ minColumn = 260, gap = 12, children, style }: OpenBridgeGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minColumn}px, 1fr))`,
        gap,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default OpenBridgeGrid;
