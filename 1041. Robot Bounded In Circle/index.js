/**
 * @author maneeshavenigalla
 * On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:
 * The north direction is the positive direction of the y-axis
 * The south direction is the negative direction of the y-axis
 * The east direction is the positive direction of the x-axis
 * The west direction is the negative direction of the x-axis
 * The robot can receive one of three instructions:
 * "G": go straight 1 unit
 * "L": turn 90 degrees to the left (i.e., anti-clockwise direction)
 * "R": turn 90 degrees to the right (i.e., clockwise direction)
 * The robot performs the instructions given in order, and repeats them forever.
 * Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = (instructions) => {

    const origin = [
        {
            dx: 0, dy: 1
        },
        {
            dx: 1, dy: 0
        },
        {
            dx: 0, dy: -1
        },
        {
            dx: -1, dy: 0
        }
    ];

    let dir = 0;
    let x = 0, y = 0;

    for (const instruction of instructions) {
        if (instruction === "G") {
            x += origin[dir].dx;
            y += origin[dir].dy;
        } else if (instruction === "L") {
            dir = (dir + 3) % 4;
        } else if (instruction === "R") {
            dir = (dir + 1) % 4;
        }
    }

    return (x == 0 && y === 0) || dir !== 0;
};

module.exports = isRobotBounded;