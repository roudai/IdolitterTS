import 'google-apps-script/google-apps-script.spreadsheet'

export class IdolTweet {
    constructor(private idolSheet: GoogleAppsScript.Spreadsheet.Sheet) {}

    randomIdolTweet() {
        let tweetExecution = true
        while (tweetExecution) {
            const line = Math.floor(
                Math.random() * (this.idolSheet?.getLastRow() - 1) + 2
            )
            const schedule = dayjs
                .dayjs(getIdolSchedule(line))
                .format('YYYY-MM-DD')
            const today = dayjs.dayjs().format('YYYY-MM-DD')
            if (schedule === '' || schedule > today) {
                const name = getIdolName(line)
                const group = getIdolGroupName(line)
                const twitter = 'https://twitter.com/' + getIdolTwitterID(line)
                postTweet(`${name}（${group}）${twitter}`)
                tweetExecution = false
            }
        }
    }
}
