import fs from 'fs'
import { MatchResult } from './enums'
import { DateStringToDate } from './utils'
import { MatchData } from './types'

export default class CsvReader {
  fileName: string
  data: MatchData[] = []
  constructor(fileName: string) {
    this.fileName = fileName
  }
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): MatchData => {
        return [
          DateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ]
      })
  }
}
