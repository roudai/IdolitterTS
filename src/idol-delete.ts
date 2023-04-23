import 'google-apps-script/google-apps-script.spreadsheet'

export class IdolDelete {
    constructor(private idolSheet: GoogleAppsScript.Spreadsheet.Sheet) {}

    deleteIdol() {
        const today = dayjs.dayjs()
        const deleteDays = this.idolSheet
            .getRange(2, 7, this.idolSheet?.getLastRow(), 1)
            .getValues()
            .flat()

        let afterDeleteArea: string[] = []
        let beforeDeleteArea: string[] = []
        deleteDays.map((value: string, i: number) => {
            if (value != '') {
                const row = i + 2
                const deleteDay = dayjs.dayjs(value)
                if (deleteDay.isAfter(today)) {
                    afterDeleteArea.push('A' + row + ':G' + row)
                } else if (
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
