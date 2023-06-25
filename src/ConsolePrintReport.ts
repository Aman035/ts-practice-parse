import { IOutput } from './interfaces'

/**
 * Console.log data
 */
export class ConsolePrintReport implements IOutput {
  print(data: string) {
    console.log(data)
  }
}
