const idolSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('アイドル一覧')
const groupSheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('グループ一覧')

function randomIdolTweet() {
    if (dataSheet !== null) {
        const generatePost = new GeneratePost(idolSheet)
        generatePost.randomIdolTweet()
    }
}
