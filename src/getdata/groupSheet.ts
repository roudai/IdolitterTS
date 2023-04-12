const groupSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('グループ一覧')

const getGroupName = (line: number): string => {
    return groupSheet?.getRange(line, 1).getValue()
}

const getGroupTwitterID = (line: number): string => {
    return groupSheet?.getRange(line, 2).getValue()
}

const getGroupSchedule = (line: number): string => {
    return groupSheet?.getRange(line, 3).getValue()
}
