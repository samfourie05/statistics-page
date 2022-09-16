export function setDateAsString(date: Date | null) {
    if (date === null) {
        return new Date().toDateString();
    }
    const Year = date.getFullYear();
    var Month = date.getMonth() + 1;
    var Day = date.getDate();
    var dateAsString = Year.toString();
    if (Month <= 9) {
        dateAsString = dateAsString + "-0" + Month.toString();
    } else {
        dateAsString = dateAsString + "-" + Month.toString();
    }
    if (Day <= 9) {
        dateAsString = dateAsString + "-0" + Day.toString();
    } else {
        dateAsString = dateAsString + "-" + Day.toString();
    }

    return dateAsString;
}