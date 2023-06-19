import fs from 'fs'

/**
 * Abstract Generic Class
 * By Generic we can spcify diff Types to class according to our usecase
 */
export abstract class CsvReader<T> {
  fileName: string
  data: T[] = []

  constructor(fileName: string) {
    this.fileName = fileName
  }

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): T => this.mapRow(row))
  }
}
