export function wait(timer: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('finished');
        }, timer);
    });
}