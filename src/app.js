console.log('hello')

let app = {
title: 'Indecision App!',
subtitle: 'Let the computer decide for you!'
};

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>so much</li>
            <li>so so much</li>
        </ol>
    </div>
);

var user = {
    name: 'Eric',
    age: '26',
    location: 'Indy'
}

var userName = 'Eric';
var age = 26;
var myLocation = 'Indianapolis, Indiana';

var templateTwo = (
    <div>
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)