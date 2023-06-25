import { MatchData } from './types'

export interface IDataReader {
  read(): void
  data: string[][]
}

export interface IAnalyzer {
  run(matchData: MatchData[]): string
}

export interface IOutput {
  print(data: string): void
}
