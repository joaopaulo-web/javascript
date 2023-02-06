function lifeInWeeks(age) {
    var days = 32850 - (age * 365)
    var weeks = 4850 - (age * 52 )
    var years = 1080 - (age * 12)
    console.log(`You have ${days} days, ${weeks} weeks, and ${years} months left`)
}

lifeInWeeks(24)
