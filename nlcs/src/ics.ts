import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import hash from "object-hash"

dayjs.extend(utc)

export enum DayOfWeek {
    Monday = "MO",
    Tuesday = "TU",
    Wednesday = "WE",
    Thursday = "TH",
    Friday = "FR",
    Saturday = "SA",
    Sunday = "SU",
    Weekday = "MO,TU,WE,TH,FR",
}

export interface Event {
    title: string
    start: [number, number, number, number, number]
    duration: { hours: number, minutes: number }
    recurrenceRule?: string
}

export function calendar(calname: string, v: string) {
    return trim(`BEGIN:VCALENDAR
                CALSCALE:GREGORIAN
                PRODID:ygpark80/school
                VERSION:2.0
                X-WR-CALNAME:${calname}
                ${v}
                END:VCALENDAR`)
}

export function timezone() {
    return trim(`BEGIN:VTIMEZONE
                TZID:Asia/Seoul
                BEGIN:DAYLIGHT
                DTSTART:19870510T020000
                RRULE:FREQ=YEARLY;UNTIL=19880507T170000Z;BYMONTH=5;BYDAY=2SU
                TZNAME:GMT+9
                TZOFFSETFROM:+0900
                TZOFFSETTO:+1000
                END:DAYLIGHT
                BEGIN:STANDARD
                DTSTART:19881009T030000
                TZNAME:GMT+9
                TZOFFSETFROM:+1000
                TZOFFSETTO:+0900
                END:STANDARD
                END:VTIMEZONE`)
}

export function event(event: Event) {
    const d = new Date(event.start[0], event.start[1] - 1, event.start[2], event.start[3], event.start[4])
    const start = dayjs(d)
    const end = start.add(event.duration.hours, "hour").add(event.duration.minutes, "minute")
    const now = dayjs()
    return trim(`BEGIN:VEVENT
                DTSTAMP:${now.utc().format("YYYYMMDDTHHmmss[Z]")}
                DTSTART;TZID=Asia/Seoul:${start.format("YYYYMMDDTHHmmss")}
                DTEND;TZID=Asia/Seoul:${end.format("YYYYMMDDTHHmmss")}
                RRULE:${event.recurrenceRule}
                SUMMARY:${event.title}
                UID:${hash(event)}
                END:VEVENT`)
}

export function weekday(until: Date) {
    return `FREQ=WEEKLY;UNTIL=${dayjs(until).utc().format("YYYYMMDDTHHmmss[Z]")};BYDAY=MO,TU,WE,TH,FR`
}

export function every(day: DayOfWeek, until: Date) {
    return `FREQ=WEEKLY;UNTIL=${dayjs(until).utc().format("YYYYMMDDTHHmmss[Z]")};BYDAY=${day}`
}

function trim(value: string) {
    return value.split("\n").map(v => v.trim()).filter(v => v).join("\n")
}
