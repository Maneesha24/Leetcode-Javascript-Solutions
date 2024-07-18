/**
 * @author maneeshavenigalla
 */
var UndergroundSystem = function () {
    this.trips = {};
    this.checkIns = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    this.checkIns[id] = { stationName, t };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
    const checkinInfo = this.checkIns[id];

    const { stationName: checkInStation, t: time } = checkinInfo;

    const station = `${checkInStation}-${stationName}`;

    const totalTime = t - time;

    if (station in this.trips) {
        const info = this.trips[station];
        info["time"] += totalTime;
        info["count"]++;
    } else {
        this.trips[station] = { time: totalTime, count: 1 };
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
    startStation,
    endStation
) {
    const station = `${startStation}-${endStation}`;
    const totalTime = this.trips[station]["time"];
    const totalCount = this.trips[station]["count"];
    return totalTime / totalCount;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

module.exports = UndergroundSystem;