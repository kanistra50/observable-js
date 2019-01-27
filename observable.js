const node = document.querySelector('input');
const p = document.querySelector('p');

function Observable(subscribe) {
    this.subscribe = subscribe;
}
Observable.prototype.map = function(mapFn) {
    const input = this;
    return new Observable(observer => {
        return input.subscribe({
            next: value => observer.next(mapFn(value)),
            error: err => observer(err),
            complete: () => observer.complete(),
        });
    });
};

Observable.prototype.filter = function(filterFn) {
    const input = this;
    return new Observable(observer => {
        return input.subscribe({
            next: value => observer.next(filterFn(value)),
            error: err => observer(err),
            complete: () => observer.complete(),
        });
    });
};

Observable.fromEvent = (element, name) => {
    return new Observable(observer => {
        const callback = event => observer.next(event);
        element.addEventListener(name, callback, false);
        return () => element.removeEventListener(name, callback, false)
    });
};


// const input$ = Observable.fromEvent(node, 'input');
// const input$ = Observable.fromEvent(node, 'input').map(
//     event => event.target.value
// );
const input$ = Observable.fromEvent(node, 'input').filter(
    event => event.target.value
);

input$.subscribe({
    next: value => {
        p.innerHTML = value;
    },
});




// const unsubscribe = input$.subscribe({
//     next: event => p.innerHTML = event.target.value
// });
// setTimeout(unsubscribe, 5000);



// fromEvent
// Observable.fromEvent = (element, name) => {};
// Observable.fromEvent();
// const one$ = new Observable(observer => {
//     observer.next(1);
//     // observer.complete();
// });
// one$.subscribe({
//     next: value => console.log(value), // 1
// });
// function Observable(observer => observer.next(1)) {
//     this.subscribe = observer => observer.next(1);
// }

