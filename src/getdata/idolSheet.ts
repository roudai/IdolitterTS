const idolSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('アイドル一覧')

const getIdolGroupName = (line: number): string => {
    return idolSheet?.getRange(line, 1).getValue()
}

const getIdolName = (line: number): string => {
    if (idolSheet?.getRange(line, 2).getValue() == '') {
        return idolSheet?.getRange(line, 3).getValue()
    } else {
        return (
            idolSheet?.getRange(line, 2).getValue() +
            ' ' +
            idolSheet?.getRange(line, 3).getValue()
        )
    }
}

const getIdolTwitterID = (line: number): string => {
    return idolSheet?.getRange(line, 6).getValue()
}

const getIdolSchedule = (line: number): string => {
    return idolSheet?.getRange(line, 7).getValue()
}
