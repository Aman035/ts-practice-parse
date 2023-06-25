import { ConsolePrintReport } from './ConsolePrintReport'
import { HtmlPrintReport } from './HtmlPrintReport'
import { Summary } from './Summary'
import { WinAnalyzer } from './WinAnalyzer'
import { CsvReader } from './composition/CsvReader'
import { MatchReader } from './composition/MatchReader'

const matchReader = new MatchReader(new CsvReader('football.csv'))
matchReader.load()
const summary = new Summary(
  new WinAnalyzer('Man United'),
  new HtmlPrintReport()
)
summary.buildReport(matchReader.matchData)
