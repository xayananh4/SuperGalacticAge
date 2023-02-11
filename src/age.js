export class Age {
  constructor() {
    this.userDateOfBirth = new Date();
    this.FutureBirthday = new Date();

    this.allThePlanets = {
      "earth": 1,
      "mercury": 0.241,
      "venus": 0.62,
      "mars": 1.88,
      "jupiter": 11.86
    };
  }

  getUserAgeInYears() {
    let today = new Date();
    let _userDateOfBirth = this.userDateOfBirth;

    let userAge = today.getFullYear() - _userDateOfBirth.getFullYear();
    let m = today.getMonth() - _userDateOfBirth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < _userDateOfBirth.getDate())) {
      userAge--;
    }
    return userAge;
  }

  getSolarPlant() {
    return new Array("earth", "mercury", "venus", "mars", "jupiter");
  }

  convertAgeToDays(userDateOfBirth) {
    let numberOfDays = this.getUserAgeInYears(userDateOfBirth) * 365;
    return numberOfDays;
  }

  calculatorYearsSinceLastBirthday(planet, pastBirthday) {
    const userAge = Date.now();
    let diff = Math.abs(userAge - pastBirthday);
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    let months = Math.floor(days / 31);
    let years = Math.ceil(months / 12);

    for (let element in this.allThePlanets) {
      if (element === planet) {
        return years / this.allThePlanets[element];
      }
    }
  }

  calculatorAgeInSolarYears(planet) {
    //convert the userbirthday into age number
    let _userAge = this.getUserAgeInYears();
    for (let element in this.allThePlanets) {
      if (element === planet) {

        let result = _userAge / this.allThePlanets[element];
        if (result % 1 != 0) {
          result = result.toFixed(2);
        }
        return result;

      }
    }
  }

  calculatorYearsForFutureBirthday(planet, futureDate, userDob) {
    let _userAge;
    let userCurrentAge = this.getUserAgeInYears(userDob);
    let futureBirthdayAge = futureDate.getFullYear() - userDob.getFullYear();
    _userAge = futureBirthdayAge - userCurrentAge;

    for (let element in this.allThePlanets) {
      if (element === planet) {
        return _userAge / this.allThePlanets[element];

      }
    }
  }
}