import { MatchReader as InMatchReader } from './inheritence/MatchReader'
import { CsvReader } from './CsvReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './enums'
import { MatchData } from './types'

const inheritenceRefactor = () => {
  const matchReader = new InMatchReader('football.csv')
  matchReader.read()
  let manUnitedWins = 0
  matchReader.data.map((each: MatchData) => {
    if (each[1] === 'Man United' && each[5] === MatchResult.HomeWin)
      manUnitedWins++
    else if (each[2] === 'Man United' && each[5] === MatchResult.AwayWin)
      manUnitedWins++
  })
  console.log(`Man United won ${manUnitedWins} games`)
}

const compositionRefactor = () => {
  const scvReader = new CsvReader('football.csv')
  const matchReader = new MatchReader(scvReader)
  matchReader.load()
  let manUnitedWins = 0
  matchReader.matchData.map((each: MatchData) => {
    if (each[1] === 'Man United' && each[5] === MatchResult.HomeWin)
      manUnitedWins++
    else if (each[2] === 'Man United' && each[5] === MatchResult.AwayWin)
      manUnitedWins++
  })
  console.log(`Man United won ${manUnitedWins} games`)
}

inheritenceRefactor()
compositionRefactor()
