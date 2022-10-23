
export function greet() {

    const today = new Date()
    const curHr = today.getHours()
    let timeOftheday;

    if (curHr < 12) {
        timeOftheday = ('good morning')
    } else if (curHr < 18) {
        timeOftheday = ('good afternoon')
    } else {
        timeOftheday = ('good evening')
    }

    return timeOftheday;
}