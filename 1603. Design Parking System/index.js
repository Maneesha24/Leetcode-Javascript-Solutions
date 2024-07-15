/**
 * @author maneeshavenigalla
 * Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and 
 * small, with a fixed number of slots for each size.
 * Implement the ParkingSystem class:
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.space = {
        1: big,
        2: medium,
        3: small
    }
};

/** 
 * Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of 
 * three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking 
 * space of its carType. If there is no space available, return false, else park the car in that size space and return true.
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (this.space[carType] <= 0) {
        return false;
    }

    this.space[carType] -= 1;
    return true;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

module.exports = ParkingSystem;