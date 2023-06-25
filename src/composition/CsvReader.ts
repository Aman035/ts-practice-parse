import fs from 'fs'
/**
 * Reads a CSV File
 */
export class CsvReader {
  constructor(public fileName: string) {}
  data: string[][] = []

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
  }
}
