class Observable {

    constructor() {
        this.consumers = [];
    }

    subscribe(consumer) {
       this.consumers.push(consumer);
    };

    unsubscribe(consumer) {
        const index = this.consumers.findIndex((item) => consumer === item);
        this.consumers.splice(index, 1)
    }
};
