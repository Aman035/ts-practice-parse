import { CsvReader } from './CsvReader'
import { MatchResult } from '../enums'
import { MatchData } from '../types'
import { DateStringToDate } from '../utils'

export class MatchReader extends CsvReader<MatchData> {
  constructor(fileName: string) {
    //initializing base class
    super(fileName)
  }

  mapRow(row: string[]): MatchData {
    return [
      DateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ]
  }
}
