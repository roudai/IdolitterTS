import 'google-apps-script/google-apps-script.spreadsheet'

export class GeneratePost {
    constructor(
        private idolSheet: GoogleAppsScript.Spreadsheet.Sheet,
        private groupSheet: GoogleAppsScript.Spreadsheet.Sheet
    ) {}

    // アイドルを抽出する
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

    randomGroupTweet() {
        const line = Math.floor(
            Math.random() * (this.groupSheet?.getLastRow() - 1) + 2
        )
        const schedule = dayjs.dayjs(getGroupSchedule(line))
        const today = dayjs.dayjs()
        if (schedule.isBefore(today) || schedule.isSame(today)) {
            // 卒業・解散後の場合、再抽選
            this.randomIdolTweet()
        }
        const group = getGroupName(line)
        const twitter = 'https://twitter.com/' + getGroupTwitterID(line)
        postTweet(`${group} ${twitter}`)
    }
}
