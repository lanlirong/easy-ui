export default {
    firstDayOfMonth(date) {
        let [year, month] = getYearMonthDate(date)
        return new Date(year, month, 1)
    },
    lastDayOfMonth(date) {
        let [year, month] = getYearMonthDate(date)
        return new Date(year, month + 1, 0)
    },
    range(begin, end) {
        let array = []
        for (let i = begin; i <= end; i++) {
            array.push(i)
        }
        return array
    },
    getYearMonthDate: getYearMonthDate,
    addMonth(date, n) {
        let [year, month, day] = getYearMonthDate(date)
        // 待解决
        console.log(year, day, '待解决');

        let newMonth = month + n
        let copy = new Date(date)
        copy.setMonth(newMonth)
        return copy
    },
    addYear(date, n) {
        let [year] = getYearMonthDate(date)
        let newYear = year + n
        let copy = new Date(date)
        copy.setFullYear(newYear)
        return copy
    }

}

function getYearMonthDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    return [year, month, day]
}
