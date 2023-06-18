import CsvReader from './CsvReader'
import { MatchResult } from './enums'
import { MatchData } from './types'

const csvReader = new CsvReader('football.csv')
csvReader.read()
let manUnitedWins = 0
csvReader.data.map((each: MatchData) => {
  if (each[1] === 'Man United' && each[5] === MatchResult.HomeWin)
    manUnitedWins++
  else if (each[2] === 'Man United' && each[5] === MatchResult.AwayWin)
    manUnitedWins++
})
console.log(`Man United won ${manUnitedWins} games`)
