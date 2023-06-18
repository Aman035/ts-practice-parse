import fs from 'fs'
const data = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','))

enum MatchResult {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D',
}

let manUnitedWins = 0
data.map((each: string[]) => {
  if (each[1] === 'Man United' && each[5] === MatchResult.homeWin)
    manUnitedWins++
  else if (each[2] === 'Man United' && each[5] === MatchResult.awayWin)
    manUnitedWins++
})
console.log(`Man United won ${manUnitedWins} games`)
