import { HtmlPrintReport } from './HtmlPrintReport'
import { WinAnalyzer } from './WinAnalyzer'
import { IAnalyzer, IOutput } from './interfaces'
import { MatchData } from './types'

/**
 * Creates a Summary
 * This is a composition class which uses 2 other classes
 */
export class Summary {
  /**
   * STATIC FN
   * These fn are part of declaration rather than being a part of instances
   * Purpose of using This is to create some predefined templates for Summary class
   */
  static winAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinAnalyzer(team), new HtmlPrintReport())
  }

  constructor(public analysis: IAnalyzer, public output: IOutput) {}
  buildReport(matchData: MatchData[]) {
    const report = this.analysis.run(matchData)
    this.output.print(report)
  }
}
