console.clear();

class Observable {
    constructor(subscription) {
        this.subscription = subscription;
    }
    subscribe(next, error, complete) {
        this.subscription({
            next, error, complete
        });

    }
};

const asyncFunc$ = new Observable(observer => {
    setTimeout(() => {
        observer.next('completed after timeout');
        observer.complete();
    }, 1500)
})

asyncFunc$.subscribe(
    res => console.log(res),
    err => console.log(err),
    complete => console.log(complete)
);