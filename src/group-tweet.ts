import 'google-apps-script/google-apps-script.spreadsheet'

export class GroupTweet {
    constructor(private groupSheet: GoogleAppsScript.Spreadsheet.Sheet) {}

    randomGroupTweet() {
        let tweetExecution = true
        while (tweetExecution) {
            const line = Math.floor(
                Math.random() * (this.groupSheet?.getLastRow() - 1) + 2
            )
            const schedule = dayjs
                .dayjs(getIdolSchedule(line))
                .format('YYYY-MM-DD')
            const today = dayjs.dayjs().format('YYYY-MM-DD')
            if (schedule === '' || schedule > today) {
                const group = getGroupName(line)
                const twitter = 'https://twitter.com/' + getGroupTwitterID(line)
                postTweet(`${group} ${twitter}`)
                tweetExecution = false
            }
        }
    }
}
