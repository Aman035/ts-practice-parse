import fs from 'fs'
import { IOutput } from './interfaces'

/**
 * Creates a html file for data
 */
export class HtmlPrintReport implements IOutput {
  print(data: string): void {
    const html = `
    <div>
      <h1> Report Analysis </h1>
      <h3> ${data} </h3>
    </div>
    `
    fs.writeFileSync('report.html', html)
  }
}
