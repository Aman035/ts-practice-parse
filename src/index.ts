import { Summary } from './Summary'
import { MatchReader } from './composition/MatchReader'

const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winAnalysisWithHtmlReport('Man United')
matchReader.load()
summary.buildReport(matchReader.matchData)
