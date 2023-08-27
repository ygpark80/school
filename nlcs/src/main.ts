import fs from "fs"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import hash from "object-hash"

dayjs.extend(utc)

function calendar(calname: string, v: string) {
    return `BEGIN:VCALENDAR
            CALSCALE:GREGORIAN
            PRODID:ygpark80/school
            VERSION:2.0
            X-WR-CALNAME:${calname}
            ${v}
            END:VCALENDAR`
}

function timezone() {
    return `BEGIN:VTIMEZONE
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
            END:VTIMEZONE`
}

function event(event: Event) {
    const d = new Date(event.start[0], event.start[1] - 1, event.start[2], event.start[3], event.start[4])
    const start = dayjs(d)
    const end = start.add(event.duration.hours, "hour").add(event.duration.minutes, "minute")
    const now = dayjs()
    return `BEGIN:VEVENT
            DTSTAMP:${now.utc().format("YYYYMMDDTHHmmss[Z]")}
            DTSTART;TZID=Asia/Seoul:${start.format("YYYYMMDDTHHmmss")}
            DTEND;TZID=Asia/Seoul:${end.format("YYYYMMDDTHHmmss")}
            RRULE:${event.recurrenceRule}
            SUMMARY:${event.title}
            UID:${hash(event)}
            END:VEVENT`
}

function weekday() {
    const until = new Date(2024, 5, 21, 23, 59, 59)
    return `FREQ=WEEKLY;UNTIL=${dayjs(until).utc().format("YYYYMMDDTHHmmss[Z]")};BYDAY=MO,TU,WE,TH,FR`
}

function every(day: string) {
    const until = new Date(2024, 5, 21, 23, 59, 59)
    return `FREQ=WEEKLY;UNTIL=${dayjs(until).utc().format("YYYYMMDDTHHmmss[Z]")};BYDAY=${day}`
}

function trim(value: string) {
    return value.split("\n").map(v => v.trim()).join("\n")
}

interface Event {
    title: string
    start: [number, number, number, number, number]
    duration: { hours: number, minutes: number }
    recurrenceRule: string
}

(async () => {
    const events: Event[] = [
        {
            title: "Assembly",
            start: [2023, 8, 24, 8, 10],
            duration: { hours: 0, minutes: 30 },
            recurrenceRule: weekday()
        },
        {
            title: "BREAK",
            start: [2023, 8, 24, 9, 50],
            duration: { hours: 0, minutes: 25 },
            recurrenceRule: weekday()
        },
        {
            title: "LUNCH",
            start: [2023, 8, 24, 12, 40],
            duration: { hours: 0, minutes: 55 },
            recurrenceRule: weekday()
        },
        // MONDAY
        {
            title: "Maths Ms Lea",
            start: [2023, 8, 28, 8, 40],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("MO")
        },
        {
            title: "English Ms Lea",
            start: [2023, 8, 28, 9, 15],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("MO")
        },
        {
            title: "Music Ms Martinez",
            start: [2023, 8, 28, 10, 15],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("MO")
        },
        {
            title: "Korean Language Ms Lee",
            start: [2023, 8, 28, 11, 30],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("MO")
        },
        {
            title: "Humanities Ms Lea",
            start: [2023, 8, 28, 13, 35],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("MO")
        },
        {
            title: "Science Ms Lea",
            start: [2023, 8, 28, 14, 45],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("MO")
        },
        // TUESDAY
        {
            title: "Swimming Mr Day",
            start: [2023, 8, 29, 8, 40],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("TU")
        },
        {
            title: "Korean Social Studies Ms Lee",
            start: [2023, 8, 29, 10, 15],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("TU")
        },
        {
            title: "English Ms Lea",
            start: [2023, 8, 29, 11, 30],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("TU")
        },
        {
            title: "Art Ms Walker",
            start: [2023, 8, 29, 13, 35],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("TU")
        },
        {
            title: "Dance Ms Menon",
            start: [2023, 8, 29, 14, 45],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("TU")
        },
        // WEDNESDAY
        {
            title: "English Ms Lea",
            start: [2023, 8, 23, 8, 40],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("WE")
        },
        {
            title: "Korean Language Ms Lee",
            start: [2023, 8, 23, 10, 15],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("WE")
        },
        {
            title: "Science Ms Lea",
            start: [2023, 8, 23, 11, 30],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("WE")
        },
        {
            title: "Maths Ms Lea",
            start: [2023, 8, 23, 13, 35],
            duration: { hours: 1, minutes: 45 },
            recurrenceRule: every("WE")
        },
        // THURSDAY
        {
            title: "English Ms Lea",
            start: [2023, 8, 24, 8, 40],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("TH")
        },
        {
            title: "Humanities Ms Lea",
            start: [2023, 8, 24, 10, 15],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("TH")
        },
        {
            title: "Drama Ms Lea",
            start: [2023, 8, 24, 10, 50],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("TH")
        },
        {
            title: "PE Mr Day",
            start: [2023, 8, 24, 11, 30],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("TH")
        },
        {
            title: "Maths Ms Lea",
            start: [2023, 8, 24, 13, 35],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("TH")
        },
        {
            title: "PSHE Ms Lea",
            start: [2023, 8, 24, 14, 45],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("TH")
        },
        // FRIDAY
        {
            title: "French/Reading Ms Hume/Ms Lea",
            start: [2023, 8, 25, 8, 40],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("FR")
        },
        {
            title: "Comoputing Mr Smithson",
            start: [2023, 8, 25, 10, 15],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("FR")
        },
        {
            title: "Korean Language Ms Lee",
            start: [2023, 8, 25, 11, 30],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("FR")
        },
        {
            title: "Library Ms Lea",
            start: [2023, 8, 25, 12, 5],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("FR")
        },
        {
            title: "Maths Ms Lea",
            start: [2023, 8, 25, 13, 35],
            duration: { hours: 0, minutes: 35 },
            recurrenceRule: every("FR")
        },
        {
            title: "House / Competition",
            start: [2023, 8, 25, 14, 10],
            duration: { hours: 0, minutes: 70 },
            recurrenceRule: every("FR")
        },
    ]

    const a = trim(timezone())
    const b = events.map((_event) => {
        return trim(event(_event))
    }).join("\n")

    const ics = trim(calendar("NLCS 4AL Timetables", `${a}\n${b}`))
    console.log(ics)
    fs.writeFileSync("../../pages/docs/nlcs-2023-4al.ics", ics)
})()
