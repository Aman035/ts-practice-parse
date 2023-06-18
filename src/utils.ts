export const DateStringToDate = (dateString: string): Date => {
  const dateComp = dateString.split('/').map((each: string) => parseInt(each))
  return new Date(dateComp[2], dateComp[1] - 1, dateComp[0])
}
