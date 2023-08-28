import fs from "fs"
import { DayOfWeek, calendar, timezone, event, every, weekday, timetable } from "./"

(async () => {
    const until = new Date(2024, 5, 21, 23, 59, 59) // June 21, 2024

    const events = Object.keys(timetable).map(key => {
        const day = key as DayOfWeek
        const _events = timetable[day]
        return _events.map((_event) => {
            if (day === DayOfWeek.Weekday) _event.recurrenceRule = weekday(until)
            else _event.recurrenceRule = every(day, until)
            return event(_event)
        }).join("\n")
    }).join("\n")

    const ics = calendar("NLCS 4AL Timetable", `${timezone()}\n${events}`)
    console.log(ics)
    fs.writeFileSync("../docs/nlcs-2023-4al.ics", ics)
})()
