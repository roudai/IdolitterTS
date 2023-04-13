function randomIdolTweet() {
    const idolTweet = new IdolTweet(idolSheet)
    idolTweet.randomIdolTweet()
}

function randomGroupTweet() {
    const groupTweet = new GroupTweet(groupSheet)
    groupTweet.randomGroupTweet()
}

function maintenanceSheets() {
    const maintenanceSheets = new MaintenanceSheets(idolSheet, groupSheet)
    maintenanceSheets.run()
}
