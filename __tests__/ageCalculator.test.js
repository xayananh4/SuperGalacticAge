import { Age } from './../src/age.js';

describe('Age', () => {

  // let earthYearsResults, mercuryYearsResults, venusYearsResults, marsYearsResults, jupiterYearsResults;

  // let earthYears, mercuryYears, venusYears, marsYears, jupiterYears;
  //  mercuryYearsResults;
  let solarPlanet, userAge, pastBirthday, years, futBirth;
  let earth, mercury, venus, mars, jupiter;

  beforeEach(() => {
    userAge = new Age();
    userAge.userDateOfBirth = new Date('January 01, 1967');

    pastBirthday = new Age();
    pastBirthday.userDateOfBirth = new Date('January 01, 2010');

    futBirth = new Age();
    futBirth.FutureBirthday.setFullYear(2028, 1, 1);

    solarPlanet = userAge.getSolarPlant();
    earth = solarPlanet[0];
    mercury = solarPlanet[1];
    venus = solarPlanet[2];
    mars = solarPlanet[3];
    jupiter = solarPlanet[4];

  });

  test('should show the user date of birth', () => {
    expect(userAge.userDateOfBirth).toEqual(userAge.userDateOfBirth);
    console.log(userAge.userDateOfBirth);
  });

  test('should return the user date of birth', () => {
    expect(userAge.userDateOfBirth).toEqual(userAge.userDateOfBirth);
  });

  test('should return the user age in years', () => {
    expect(userAge.getUserAgeInYears(userAge.userDateOfBirth)).toEqual(56);
  });

  test('should return the user age in days', () => {
    let numberOfDays = userAge.convertAgeToDays(userAge);
    expect(userAge.convertAgeToDays(userAge)).toEqual(numberOfDays);
  });

  test('should return a solar planet', () => {
    expect(solarPlanet[0]).toEqual(earth);
  });

  test('should return the users age in years for each planet', () => {
    const earthYearsResults = userAge.calculatorAgeInSolarYears(earth, years);
    const mercuryYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mercury, years)).toFixed(2);
    const venusYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(venus, years)).toFixed(2);
    const marsYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(mars, years)).toFixed(2);
    const jupiterYearsResults = parseFloat(userAge.calculatorAgeInSolarYears(jupiter, years)).toFixed(2);
    expect(earthYearsResults).toEqual(56);
    expect(mercuryYearsResults).toEqual("232.37");
    expect(venusYearsResults).toEqual("90.32");
    expect(marsYearsResults).toEqual("29.79");
    expect(jupiterYearsResults).toEqual("4.72");

  });


  //Prompt FOR: Show All The Years For User On ALL The Planets 
  test('should show users age in years for each planet', () => {
    const earthYears = userAge.calculatorAgeInSolarYears(earth);
    const mercuryYears = userAge.calculatorAgeInSolarYears(mercury);
    const venusYears = userAge.calculatorAgeInSolarYears(venus);
    const marsYears = userAge.calculatorAgeInSolarYears(mars);
    const jupiterYears = userAge.calculatorAgeInSolarYears(jupiter);
    expect(earthYears).toEqual(56);
    expect(mercuryYears).toEqual(232.37);
    expect(venusYears).toEqual(90.32);
    expect(marsYears).toEqual(29.79);
    expect(jupiterYears).toEqual(4.72);
    console.log(earthYears + " in " + earth + " years ");
    console.log(mercuryYears + " in " + mercury + " years ");
    console.log(venusYears + " in " + venus + " years ");
    console.log(marsYears + " in " + mars + " years ");
    console.log(jupiterYears + " in " + jupiter + " years ");
  });

  test('should return years since user past birthday', () => {
    expect(userAge.calculatorYearsSinceLastBirthday(userAge.userDateOfBirth, pastBirthday.userDateOfBirth)).toEqual(years);
  });

  test('should show the years that have pass since user past birthday', () => {
    expect(userAge.calculatorYearsSinceLastBirthday(userAge.userDateOfBirth, pastBirthday.userDateOfBirth)).toEqual(13);
    console.log(years);
  });

  //Prompt FOR: Show The Years That Have Pass Since Last Birthday 
  test('should show the years that have pass since last birthday on all planets', () => {
    const earthYearsResults = userAge.calculatorYearsSinceLastBirthday(earth, pastBirthday.userDateOfBirth);
    const mercuryYearsResults = userAge.calculatorYearsSinceLastBirthday(mercury, pastBirthday.userDateOfBirth);
    const venusYearsResults = userAge.calculatorYearsSinceLastBirthday(venus, pastBirthday.userDateOfBirth);
    const marsYearsResults = userAge.calculatorYearsSinceLastBirthday(mars, pastBirthday.userDateOfBirth);
    const jupiterYearsResults = userAge.calculatorYearsSinceLastBirthday(jupiter, pastBirthday.userDateOfBirth);
    expect(earthYearsResults).toEqual(13);
    expect(mercuryYearsResults).toEqual(53.94);
    expect(venusYearsResults).toEqual(20.97);
    expect(marsYearsResults).toEqual(6.91);
    expect(jupiterYearsResults).toEqual(1.10);
    console.log(earthYearsResults + " " + earth + " years have passed.");
    console.log(mercuryYearsResults + " " + mercury + " years have passed.");
    console.log(venusYearsResults + " " + venus + " years have passed.");
    console.log(marsYearsResults + " " + mars + " years have passed.");
    console.log(jupiterYearsResults + " " + jupiter + " years have passed.");
  });

  //Prompt FOR: Show The Years Until Future Birthday 
  test('should show the years until user future birthday', () => {
    const futureYears = userAge.calculatorYearsForFutureBirthday(earth, futBirth.FutureBirthday, userAge.userDateOfBirth);
    expect(futureYears).toEqual(5);
    const mercuryYearsResults = userAge.calculatorYearsForFutureBirthday(mercury, futBirth.FutureBirthday, userAge.userDateOfBirth);
    expect(mercuryYearsResults).toEqual(20.75);
    const venusYearsResults = userAge.calculatorYearsForFutureBirthday(venus, futBirth.FutureBirthday, userAge.userDateOfBirth);
    expect(venusYearsResults).toEqual(8.06);
    const marsYearsResults = userAge.calculatorYearsForFutureBirthday(mars, futBirth.FutureBirthday, userAge.userDateOfBirth)
    expect(marsYearsResults).toEqual(2.66);
    const jupiterYearsResults = userAge.calculatorYearsForFutureBirthday(jupiter, futBirth.FutureBirthday, userAge.userDateOfBirth)
    expect(jupiterYearsResults).toEqual(0.42);
    console.log(futureYears + " " + earth + " years have yet to pass.");
    console.log(mercuryYearsResults + " " + mercury + " years have yet to pass.");
    console.log(venusYearsResults + " " + mercury + " years have yet to pass.");
    console.log(marsYearsResults + " " + mars + " years have yet to pass.");
    console.log(jupiterYearsResults + " " + jupiter + " years have yet to pass.");
  });



});