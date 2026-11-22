export class TimeDateHelper {
    private static months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    private static days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]

    public static getTime () {
        const now = new Date();
        let hours = now.getHours();
        const ampm = hours >= 12? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const minutes = String(now.getMinutes()).padStart(2, '0');

        const formatted = `${hours}:${minutes} ${ampm}`;

        return formatted;
    } 

    public static getDate () {
        const now = new Date();
        const day = now.getDay();
        const dayName = this.days[day];
        const month = this.months[now.getMonth() + 1];
        const year = now.getFullYear();

        const formatted = `${dayName} ${month} ${year}`;

        return formatted;
    } 
}