//テストツイートする
function postTweet(tweetText) {
  let ui = SpreadsheetApp.getUi();
  //Tweet Endpoint
  var endpoint = "https://api.twitter.com/2/tweets";

  //トークン確認
  var service = checkOAuth();

  if (service.hasAccess()) {
    //message本文
    var message = {
      text: tweetText,
    };

    //リクエストヘッダ
    let header = {
      Authorization: "Bearer " + service.getAccessToken(),
    };

    //リクエスト実行
    const response = UrlFetchApp.fetch(endpoint, {
      method: "post",
      headers: {
        Authorization: "Bearer " + service.getAccessToken(),
      },
      muteHttpExceptions: true,
      payload: JSON.stringify(message),
      contentType: "application/json",
    });

    //リクエスト結果を取得する
    const result = JSON.parse(response.getContentText());

    //リクエスト結果を表示
    console.log(JSON.stringify(result, null, 2));
  } else {
    ui.alert("認証が実行されていませんよ。");
  }
}
