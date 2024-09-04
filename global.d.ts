import { Buffer as NodeBuffer } from 'buffer';

declare global {
  var Buffer: typeof NodeBuffer;
  var process: {
    env: Record<string, string>;
  };
}

declare module 'node:*' {
  const value: any;
  export = value;
}

declare module 'stream-browserify' {
  import * as stream from 'stream';
  export = stream;
}

declare module 'buffer' {
  export const Buffer: typeof global.Buffer;
}