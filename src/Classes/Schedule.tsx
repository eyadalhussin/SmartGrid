
interface Schedule{
    id:number,
    deviceID:number,
    smarthomeId:number,
    consumption:number,
    duration:number,
    start: string,
    end: string,
    price:number
}

export default Schedule;