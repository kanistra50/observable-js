const observable = new Observable();
console.log(observable);

observable.subscribe('Micky');
observable.subscribe('John');
observable.unsubscribe('Micky');
observable.subscribe('Edmond');
observable.unsubscribe('Edmond');
