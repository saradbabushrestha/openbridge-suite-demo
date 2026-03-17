declare module "react" { const React: any; export = React; export as namespace React; }
declare module "react/jsx-runtime" { export const Fragment: any; export function jsx(type: any, props: any, key?: any): any; export function jsxs(type: any, props: any, key?: any): any; }
declare namespace JSX { interface IntrinsicElements { [elemName: string]: any; } }

declare namespace React {
  type ReactNode = any;
  type CSSProperties = any;
  type MouseEventHandler<T = any> = any;
}
