import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.value = inputToday
selectedDate.min = inputToday
form.onsubmit= async (event)=>{
    event.preventDefault()
    try{
        const name = clientName.value.trim()
        if(!name){
            return alert('informe o nome!')
        }
        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert('informe o horário!')
        }
        const [hour] = hourSelected.innerHTML.split(":")
        

        const when = dayjs(selectedDate.value).add(hour,"hour")
    
        const id = new Date().getTime()
         await scheduleNew({
            id,
            name,
            when,
        })
        await schedulesDay()
        clientName.value = ""
    }catch(error){
        alert('não foi possivel realizar o agendamento!')
        console.log(error)
    }
}