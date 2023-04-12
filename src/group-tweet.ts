import 'google-apps-script/google-apps-script.spreadsheet'

export class GroupTweet {
    constructor(private groupSheet: GoogleAppsScript.Spreadsheet.Sheet) {}

    randomGroupTweet() {
        const line = Math.floor(
            Math.random() * (this.groupSheet?.getLastRow() - 1) + 2
        )
        const schedule = dayjs.dayjs(getGroupSchedule(line))
        const today = dayjs.dayjs()
        if (schedule.isBefore(today) || schedule.isSame(today)) {
            // 卒業・解散後の場合、再抽選
            this.randomGroupTweet()
        }
        const group = getGroupName(line)
        const twitter = 'https://twitter.com/' + getGroupTwitterID(line)
        postTweet(`${group} ${twitter}`)
    }
}
