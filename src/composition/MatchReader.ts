import { MatchResult } from '../enums'
import { IDataReader } from '../interfaces'
import { MatchData } from '../types'
import { DateStringToDate } from '../utils'
import { CsvReader } from './CsvReader'

export class MatchReader {
  /**
   * STATIC FN
   * Creates a template for Class to read from Csv
   * @param fileName file to be read
   * @returns
   */
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvReader(fileName))
  }

  matchData: MatchData[] = []
  constructor(public reader: IDataReader) {}

  load(): void {
    this.reader.read()
    this.matchData = this.reader.data.map(
      (row: string[]): MatchData => [
        DateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    )
  }
}
