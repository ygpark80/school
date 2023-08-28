import { DayOfWeek, Event } from "./ics"

export const timetable: { [key: string]: Event[] } = {
    [DayOfWeek.Weekday]: [
        {
            title: "Assembly",
            start: [2023, 8, 24, 8, 10],
            duration: { hours: 0, minutes: 30 },
        },
        {
            title: "BREAK",
            start: [2023, 8, 24, 9, 50],
            duration: { hours: 0, minutes: 25 },
        },
        {
            title: "LUNCH",
            start: [2023, 8, 24, 12, 40],
            duration: { hours: 0, minutes: 55 },
        },
    ],
    // MONDAY
    [DayOfWeek.Monday]: [
        {
            title: "Maths Ms Lea",
            start: [2023, 8, 28, 8, 40],
            duration: { hours: 0, minutes: 35 },
        },
        {
            title: "English Ms Lea",
            start: [2023, 8, 28, 9, 15],
            duration: { hours: 0, minutes: 35 },
        },
        {
            title: "Music Ms Martinez",
            start: [2023, 8, 28, 10, 15],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Korean Language Ms Lee",
            start: [2023, 8, 28, 11, 30],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Humanities Ms Lea",
            start: [2023, 8, 28, 13, 35],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Science Ms Lea",
            start: [2023, 8, 28, 14, 45],
            duration: { hours: 0, minutes: 35 },
        },
    ],
    [DayOfWeek.Tuesday]: [
        // TUESDAY
        {
            title: "Swimming Mr Day",
            start: [2023, 8, 29, 8, 40],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Korean Social Studies Ms Lee",
            start: [2023, 8, 29, 10, 15],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "English Ms Lea",
            start: [2023, 8, 29, 11, 30],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Art Ms Walker",
            start: [2023, 8, 29, 13, 35],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Dance Ms Menon",
            start: [2023, 8, 29, 14, 45],
            duration: { hours: 0, minutes: 35 },
        },
    ],
    [DayOfWeek.Wednesday]: [
        // WEDNESDAY
        {
            title: "English Ms Lea",
            start: [2023, 8, 23, 8, 40],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Korean Language Ms Lee",
            start: [2023, 8, 23, 10, 15],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Science Ms Lea",
            start: [2023, 8, 23, 11, 30],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Maths Ms Lea",
            start: [2023, 8, 23, 13, 35],
            duration: { hours: 1, minutes: 45 },
        },
    ],
    [DayOfWeek.Thursday]: [
        // THURSDAY
        {
            title: "English Ms Lea",
            start: [2023, 8, 24, 8, 40],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Humanities Ms Lea",
            start: [2023, 8, 24, 10, 15],
            duration: { hours: 0, minutes: 35 },
        },
        {
            title: "Drama Ms Lea",
            start: [2023, 8, 24, 10, 50],
            duration: { hours: 0, minutes: 35 },
        },
        {
            title: "PE Mr Day",
            start: [2023, 8, 24, 11, 30],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Maths Ms Lea",
            start: [2023, 8, 24, 13, 35],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "PSHE Ms Lea",
            start: [2023, 8, 24, 14, 45],
            duration: { hours: 0, minutes: 35 },
        },
    ],
    [DayOfWeek.Friday]: [
        // FRIDAY
        {
            title: "French/Reading Ms Hume/Ms Lea",
            start: [2023, 8, 25, 8, 40],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Comoputing Mr Smithson",
            start: [2023, 8, 25, 10, 15],
            duration: { hours: 0, minutes: 70 },
        },
        {
            title: "Korean Language Ms Lee",
            start: [2023, 8, 25, 11, 30],
            duration: { hours: 0, minutes: 35 },
        },
        {
            title: "Library Ms Lea",
            start: [2023, 8, 25, 12, 5],
            duration: { hours: 0, minutes: 35 },
        },
        {
            title: "Maths Ms Lea",
            start: [2023, 8, 25, 13, 35],
            duration: { hours: 0, minutes: 35 },
        },
        {
            title: "House / Competition",
            start: [2023, 8, 25, 14, 10],
            duration: { hours: 0, minutes: 70 },
        },
    ],
}
