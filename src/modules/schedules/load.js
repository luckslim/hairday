
import {scheduleFetchByDay} from "../../services/schedules-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import {scheduleShow} from "../schedules/show.js"
const selectedDate = document.getElementById("date")
export async function schedulesDay(){
    const date = selectedDate.value
    const dailySchedules = await scheduleFetchByDay({date})
    console.log(dailySchedules)
    scheduleShow({dailySchedules})
    hoursLoad({date, dailySchedules})
}