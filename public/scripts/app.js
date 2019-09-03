'use strict';

console.log('hello');

var app = {
    title: 'Indecision App!',
    subtitle: 'Let the computer decide for you!'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'so much'
        ),
        React.createElement(
            'li',
            null,
            'so so much'
        )
    )
);

var user = {
    name: 'Eric',
    age: '26',
    location: 'Indy'
};

var userName = 'Eric';
var age = 26;
var myLocation = 'Indianapolis, Indiana';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
