import { MatchResult } from '../enums'
import { IDataReader } from '../interfaces'
import { MatchData } from '../types'
import { DateStringToDate } from '../utils'

export class MatchReader {
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
