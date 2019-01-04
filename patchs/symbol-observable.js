const context = typeof global === 'object'? global: (typeof window === 'object'? window: this);
const Symbol = context.Symbol;

let result;
if (typeof Symbol === 'function') {
    if (Symbol.observable) {
        result = Symbol.observable;
    } else {
        result = Symbol('observable');
        Symbol.observable = result;
    }
} else {
    result = '@@observable';
}

export default result;
