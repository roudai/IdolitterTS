import 'google-apps-script/google-apps-script.spreadsheet'

export class GeneratePost {
    constructor(private dataSheet: GoogleAppsScript.Spreadsheet.Sheet) {}

    // アイドルを抽出する
    randomIdolTweet() {
        const line = Math.floor(
            Math.random() * (this.dataSheet?.getLastRow() - 1) + 2
        )
        const schedule = dayjs.dayjs(getSchedule(line))
        const today = dayjs.dayjs()
        if (schedule.isBefore(today) || schedule.isSame(today)) {
            // 卒業・解散後の場合、再抽選
            this.randomIdolTweet()
        }
        const name = getIdolName(line)
        const group = getIdolGroupName(line)
        const twitter = 'https://twitter.com/' + getTwitterID(line)
        postTweet(`${name}（${group}）${twitter}`)
    }
}
