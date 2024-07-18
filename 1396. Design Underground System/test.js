const UndergroundSystem = require("./index");

test("should pass the test cases", () => {
    const undergroundSystem = new UndergroundSystem();
    undergroundSystem.checkIn(45, "Leyton", 3);
    undergroundSystem.checkIn(32, "Paradise", 8);
    undergroundSystem.checkIn(27, "Leyton", 10);
    undergroundSystem.checkOut(45, "Waterloo", 15);
    undergroundSystem.checkOut(27, "Waterloo", 20);
    undergroundSystem.checkOut(32, "Cambridge", 22);
    expect(undergroundSystem.getAverageTime("Paradise", "Cambridge")).toBe(14);
    expect(undergroundSystem.getAverageTime("Leyton", "Waterloo")).toBe(11);
    undergroundSystem.checkIn(10,"Leyton",24);
    expect(undergroundSystem.getAverageTime("Leyton", "Waterloo")).toBe(11);
    undergroundSystem.checkOut(10,"Waterloo",38);
    expect(undergroundSystem.getAverageTime("Leyton", "Waterloo")).toBe(12);
});
