beforeEach(function() {
  thermostat = new Thermostat();
});

describe('Thermostat', function() {
  it('should return 20 degrees when created', function(){
    expect(thermostat.temperature).toEqual(20);
  });
});

describe('up', function() {
  it('should increase the temperate by 5', function() {
    thermostat.up(5);
    expect(thermostat.temperature).toEqual(25);
  });
});

describe('down', function() {
  it('should decrease the temerature by 5', function() {
    thermostat.down(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('should throw error if temperature would go below 10', function() {
    expect(function() { thermostat.down(11); } ).toThrow("Minimum temperature is 10")
  });
});

describe('power saving mode on', function() {
  it('should show a maximum temperature of 25 degrees', function() {
    thermostat.powerSaveModeOn();
    expect(thermostat.maxTemperature).toEqual(25);
  });
});
