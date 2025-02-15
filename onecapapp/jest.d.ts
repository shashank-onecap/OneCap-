import type { Config } from '@jest/types';
import type { JestImportMeta } from '@jest/types';

declare global {
  const jest: typeof import('@jest/globals').jest;
  namespace jest {
    interface Context extends JestImportMeta {}
  }
} 