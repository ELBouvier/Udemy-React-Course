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

var locationCheck = function locationCheck(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        user.age >= 20 ? 'Age:' + user.age : 'Too young.'
    ),
    locationCheck(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
