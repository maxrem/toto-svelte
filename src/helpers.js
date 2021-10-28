export const Datetime = {
    format(datetimeString) {
        let datetime = new Date(datetimeString);//Date.parse(datetimeString);
        return datetime.toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' }); // should be UTC
    }
}