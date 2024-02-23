class TimeSimulation{
    private accFactor:number;
    private currentDate:Date;
    private intervalID: NodeJS.Timeout | null;

    constructor(accFactor = 100000){
        this.accFactor = accFactor;
        this.currentDate = new Date();
        this.intervalID = null;
    }

    start(){
        this.intervalID = setInterval(() => {
            const newDate = new Date(this.currentDate.getTime() + this.accFactor);
            this.currentDate = newDate;
        }, this.accFactor);
    }

    stop(){
        if(this.intervalID != null){
            clearInterval(this.intervalID);
        }
    }

    setAccFactor(accFactor:number){
        this.accFactor = accFactor;
    }

    getMinutes():string{
        let minutes = this.currentDate.getMinutes();
        let adjMinutes:string = '';

        minutes < 10 ? adjMinutes = '0' + minutes : adjMinutes += minutes;
        return adjMinutes;
    }

    getHours():string{
        let hours = this.currentDate.getHours();
        let adjHours:string = '';
        hours < 10 ? adjHours = '0' + hours : adjHours += hours;
        return adjHours;
    }

    getDay():string{
        let day = this.currentDate.getDate();
        let currDay:string = "";
        day < 10 ? currDay = '0' + day : currDay += day;
        return currDay;
    }

    getMonth():string{
        let month = this.currentDate.getMonth()+1;
        let currMonth:string = "";
        month < 10 ? currMonth = '0' + month : currMonth += month;
        return currMonth;
    }

    getYear():string{
        return ''+this.currentDate.getFullYear();
    }

    getDayName():string{
        return this.currentDate.toLocaleDateString(undefined, { weekday: 'long' });
    }

}

export default TimeSimulation;