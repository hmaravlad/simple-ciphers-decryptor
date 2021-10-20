import { IReader } from 'src/types/reader';

export class Base64Reader implements IReader {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  read(text: string): Uint8Array {
    throw new Error('NOT IMPLEMENTED');
  }
}