import 'google-apps-script/google-apps-script.spreadsheet'

export class IdolDelete {
  constructor(private idolSheet: GoogleAppsScript.Spreadsheet.Sheet) {}

  deleteIdol() {
    const today = dayjs.dayjs()
    const deleteDays = this.idolSheet.getRange(2, 7, this.idolSheet?.getLastRow(), 1).getValues().flat()

    // 色リセット
    this.idolSheet.getRange(2, 1, this.idolSheet?.getLastRow() - 1, 7).setBackground(null)
    let afterDeleteArea: string[] = []
    let beforeDeleteArea: string[] = []
    deleteDays.map((value: string, i: number) => {
      if (value != '') {
        const row = i + 2
        const deleteDay = dayjs.dayjs(value)
        if (deleteDay.isAfter(today)) {
          // 卒業解散予定を過ぎている
          afterDeleteArea.push('A' + row + ':G' + row)
        } else if (
          // 卒業解散予定より前
          deleteDay.isBefore(today) ||
          deleteDay.isSame(today)
        ) {
          beforeDeleteArea.push('A' + row + ':G' + row)
        }
      }
    })
    this.idolSheet.getRangeList(afterDeleteArea).setBackground('#dcdcdc')
    this.idolSheet.getRangeList(beforeDeleteArea).setBackground('#a9a9a9')
  }
}
