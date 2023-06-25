import { MatchResult } from './enums'
import { IAnalyzer } from './interfaces'
import { MatchData } from './types'

/**
 * Returns no. of wins of a particular team
 */
export class WinAnalyzer implements IAnalyzer {
  constructor(public teamName: string) {}
  run(matchData: MatchData[]): string {
    let wins = 0
    matchData.map((each: MatchData) => {
      if (each[1] === this.teamName && each[5] === MatchResult.HomeWin) wins++
      else if (each[2] === this.teamName && each[5] === MatchResult.AwayWin)
        wins++
    })
    return `Team ${this.teamName} won ${wins} games`
  }
}
