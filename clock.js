//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    let extraHoursFromMinutes = Math.floor(minutes / 60);
    
    let calchoursFromMin = (hours + extraHoursFromMinutes);
    let extraHoursFromHours = Math.floor(calchoursFromMin / 24);
    let calchours = calchoursFromMin - (24 * extraHoursFromHours);
    let calcminutes = minutes - (60 * extraHoursFromMinutes);

    this.timeArray = [calchours, calcminutes];
  }

  toString() {
    if(this.timeArray[0] < 10){
      this.timeArray[0] = "0" + String(this.timeArray[0]).valueOf();
    } 

    if(this.timeArray[1] < 10){
      this.timeArray[1] = "0" + String(this.timeArray[1]).valueOf();
    }
    return this.timeArray.join(":");
  }

  plus(amountOfMinutes) {
    this.timeArray[1] = this.timeArray[1] + amountOfMinutes;
    return new Clock(this.timeArray[0], this.timeArray[1]);
  }

  minus(amountOfMinutes) {
    this.timeArray[1] = this.timeArray[1] - amountOfMinutes;
    return new Clock(this.timeArray[0], this.timeArray[1]);
  }

  equals(clock) {
    return clock.toString() === new Clock(this.timeArray[0], this.timeArray[1]).toString();
  }
}

