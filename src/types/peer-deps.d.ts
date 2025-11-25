/**
 * Type declarations for optional peer dependencies
 * These are declared to allow the code to compile without the peer dependencies installed
 */

// React peer dependency
declare module 'react' {
  export function createElement(
    type: string | ((...args: unknown[]) => unknown),
    props?: Record<string, unknown> | null,
    ...children: unknown[]
  ): unknown;
  
  export type ReactNode = unknown;
  export type ReactElement = unknown;
  export type FC<P = Record<string, never>> = (props: P) => ReactElement | null;
}

// React DOM Server peer dependency
declare module 'react-dom/server' {
  export function renderToStaticMarkup(element: unknown): string;
  export function renderToString(element: unknown): string;
}

// Edge.js peer dependency
declare module 'edge.js' {
  interface Edge {
    render(template: string, state?: Record<string, unknown>): Promise<string>;
    registerTemplate(name: string, contents: string): void;
  }
  
  const edge: Edge;
  export default edge;
  export { edge };
}
