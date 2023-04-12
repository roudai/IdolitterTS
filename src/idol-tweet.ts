import 'google-apps-script/google-apps-script.spreadsheet'

export class IdolTweet {
    constructor(private idolSheet: GoogleAppsScript.Spreadsheet.Sheet) {}

    randomIdolTweet() {
        const line = Math.floor(
            Math.random() * (this.idolSheet?.getLastRow() - 1) + 2
        )
        const schedule = dayjs.dayjs(getIdolSchedule(line))
        const today = dayjs.dayjs()
        if (schedule.isBefore(today) || schedule.isSame(today)) {
            // 卒業・解散後の場合、再抽選
            this.randomIdolTweet()
        }
        const name = getIdolName(line)
        const group = getIdolGroupName(line)
        const twitter = 'https://twitter.com/' + getIdolTwitterID(line)
        postTweet(`${name}（${group}）${twitter}`)
    }
}
