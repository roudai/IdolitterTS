const dataSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('アイドル一覧')

const getIdolGroupName = (line: number): string => {
    return dataSheet?.getRange(line, 1).getValue()
}

const getIdolName = (line: number): string => {
    return (
        dataSheet?.getRange(line, 2).getValue() +
        ' ' +
        dataSheet?.getRange(line, 3).getValue()
    )
}

const getTwitterID = (line: number): string => {
    return dataSheet?.getRange(line, 6).getValue()
}

const getSchedule = (line: number): string => {
    return dataSheet?.getRange(line, 7).getValue()
}
