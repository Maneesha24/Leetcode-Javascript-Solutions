const ParkingSystem = require("./index");

test("should pass the test cases", () => {
    const parkingSystem = new ParkingSystem(1, 1, 0);
    expect(parkingSystem.addCar(1)).toBe(true);
    expect(parkingSystem.addCar(2)).toBe(true);
    expect(parkingSystem.addCar(3)).toBe(false);
    expect(parkingSystem.addCar(1)).toBe(false);
});
