import 'google-apps-script/google-apps-script.spreadsheet'

export class MaintenanceSheets {
    constructor(
        private idolSheet: GoogleAppsScript.Spreadsheet.Sheet,
        private groupSheet: GoogleAppsScript.Spreadsheet.Sheet
    ) {}

    run() {
        this.sortData()
    }

    sortData() {
        // データ並び替え
        this.idolSheet
            .getRange(
                2,
                1,
                this.idolSheet.getLastRow() - 1,
                this.idolSheet.getLastColumn()
            )
            .sort([
                { column: 1, ascending: true },
                { column: 6, ascending: true },
            ])
        this.groupSheet
            .getRange(
                2,
                1,
                this.groupSheet.getLastRow() - 1,
                this.groupSheet.getLastColumn()
            )
            .sort([
                { column: 1, ascending: true },
                { column: 2, ascending: true },
            ])
    }
}
