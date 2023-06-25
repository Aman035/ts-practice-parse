import { IAnalyzer, IOutput } from './interfaces'
import { MatchData } from './types'

/**
 * Creates a Summary
 * This is a composition class which uses 2 other classes
 */
export class Summary {
  constructor(public analysis: IAnalyzer, public output: IOutput) {}
  buildReport(matchData: MatchData[]) {
    const report = this.analysis.run(matchData)
    this.output.print(report)
  }
}
