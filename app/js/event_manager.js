class EventManager {
    constructor () {
        this.listeners = {

        };
    }

    subscribe (evenType, listener) {
       this.listeners[evenType] = listener;
    }

    unsubscribe (eventType, listener) {
        delete this.listeners[eventType];
    }

    notify (eventType, data) {
        this.listeners[eventType](data);
    }
}