/**
 * @author maneeshavenigalla
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from 
 * cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = (paths) => {
    
    let pathObj = {};

    for(const [src, dst] of paths) {
        pathObj[src] = dst;
    }

    let path = paths[0][0];

    while(path in pathObj) {
        path = pathObj[path];
    }

    return path;
};

module.exports = destCity;