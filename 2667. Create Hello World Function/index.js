/**
 * @author maneeshavenigalla
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 * @return {Function}
 */
const createHelloWorld = () => {

    return (() => {
        return "Hello World";
    })();
}

module.exports = createHelloWorld;