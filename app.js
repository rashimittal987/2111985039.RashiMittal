const express=require("express");
const bodyParser=require("bodyParser");

const app=express();

app.use(bodyParser.json());

const avge=(num)=>{
    const avg=num.reduce((acc, curr) => acc + curr, 0);
    return avg / num.length;
};

const prime=(num)=>{
    if (num <= 1) return 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return 0;
    }
    return 1;
};

const Even = (num) => {
    return num % 2 === 0;
};

const fib=(num)=>{
    const sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
};

app.post('http://20.244.56.144/test/avg', (req, res) => {
    const { num } = req.body;
    const avg = avge(num);
    res.json({ avge: avg });
});

app.post('http://20.244.56.144/test/prime', (req, res) => {
    const { num } = req.body;
    const prime = prime(num);
    res.json({ prime: prime });
});

app.post('http://20.244.56.144/test/even', (req, res) => {
    const { num } = req.body;
    const even = Even(num);
    res.json({ Even: even });
});

app.post('http://20.244.56.144/test/fibo', (req, res) => {
    const { n } = req.body;
    const sequence = fibonacci(n);
    res.json({ fibonacci_sequence: sequence });
});

app.post('http://20.244.56.144/test/random', (req, res) => {
    const { min, max } = req.body;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    res.json({ random_number: random });
});
app.listen(3000,(res,req)=>{
    console.log("server connected");
});