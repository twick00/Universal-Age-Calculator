export class AgeFinder
{
    constructor(ageInDays, earthAverageLifeExpactancyInDays = 79 * 365)
    {
        this.earthAgeInSeconds = ageInDays * 86400;
        this.mercuryMultiplyer = .24;
        this.venusMultiplyer = .62;
        this.marsMultiplyer = 1.88;
        this.jupiterMultiplyer = 11.86;
        this.earthAverageLifeExpactancyInDays = earthAverageLifeExpactancyInDays;
        this.expectedLifeLeftInDays = this.earthAverageLifeExpactancyInDays - ageInDays;
        this.mercuryAge = this.earthAgeInSeconds * this.mercuryMultiplyer;
        this.venusAge = this.earthAgeInSeconds * this.venusMultiplyer;
        this.marsAge = this.earthAgeInSeconds * this.marsMultiplyer;
        this.jupiterYears = this.earthAgeInSeconds * this.jupiterMultiplyer;
    }
    
    lifeExpectancyEarthInDays()
    {
        return this.expectedLifeLeftInDays;
    }
    lifeExpectancyMercuryInDays()
    {
        return this.expectedLifeLeftInDays * this.mercuryMultiplyer;
    }
    lifeExpectancyVenusInDays()
    {
        return this.expectedLifeLeftInDays * this.venusMultiplyer;
    }
    lifeExpectancyMarsInDays()
    {
        return this.expectedLifeLeftInDays * this.marsMultiplyer;
    }
    lifeExpectancyJupiterInDays()
    {   
        return this.expectedLifeLeftInDays * this.jupiterMultiplyer;
    }
}
