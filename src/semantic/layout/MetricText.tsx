import * as React from 'react';

export type MetricTextProps = {
  value?: React.ReactNode;
  unit?: React.ReactNode;
  secondary?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
};

export function MetricText({ value, unit, secondary, align = 'center' }: MetricTextProps) {
  return (
    <div style={{ textAlign: align }}>
      {value != null ? (
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center', gap: 6 }}>
          <span style={{ fontSize: 30, fontWeight: 700, lineHeight: 1, color: '#f7f7f7' }}>{value}</span>
          {unit != null ? <span style={{ fontSize: 14, color: '#8da0bf' }}>{unit}</span> : null}
        </div>
      ) : null}
      {secondary != null ? <div style={{ marginTop: 4, fontSize: 12, color: '#8da0bf' }}>{secondary}</div> : null}
    </div>
  );
}

export default MetricText;
