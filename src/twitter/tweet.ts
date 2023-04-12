//テストツイートする
function postTweet(tweetText: String) {
    let ui = SpreadsheetApp.getUi()
    //Tweet Endpoint
    const endpoint = 'https://api.twitter.com/2/tweets'

    //トークン確認
    let service = checkOAuth()

    if (service.hasAccess()) {
        //message本文
        var message = {
            text: tweetText,
        }

        //リクエストヘッダ
        let header = {
            Authorization: 'Bearer ' + service.getAccessToken(),
        }

        //リクエスト実行
        const response = UrlFetchApp.fetch(endpoint, {
            method: 'post',
            headers: {
                Authorization: 'Bearer ' + service.getAccessToken(),
            },
            muteHttpExceptions: true,
            payload: JSON.stringify(message),
            contentType: 'application/json',
        })

        //リクエスト結果を取得する
        const result = JSON.parse(response.getContentText())
    } else {
        ui.alert('認証が実行されていません。')
    }
}
