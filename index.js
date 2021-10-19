setTimeout(() => {
    console.log('test babel', this);
}, 100);

const hello = (name) => 'hello ' + name;

const n = 'world';
n   |> hello(%)
    |> console.log(%);

class Test {
    
}