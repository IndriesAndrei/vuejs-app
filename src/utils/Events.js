// global event bus (map to keep track of all our events)
const events = new Map();

export default {
    $on(eventName, fn) {
        if (!events.has(eventName)) {
            events.set(eventName, []);
        }

        // get all the events and push them in the function
        events.get(eventName).push(fn);
    },

    $off(eventName, fn) {
        throw {message: 'Not implemented'}
    },

    $emit(eventName, data) {
        if (events.has(eventName)) {
            events.get(eventName).forEach(fn => fn(data));
        }
    }
};