import { IReader } from 'src/types/reader';

export class AsciiReader implements IReader {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  read(text: string): Uint8Array {
    throw new Error('NOT IMPLEMENTED');
  }
}