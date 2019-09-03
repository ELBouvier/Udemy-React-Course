'use strict';

console.log('hello');

// JSX Javascript XML (syntax extension)

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'My name is Eric Bouvier'
    ),
    React.createElement(
        'p',
        null,
        'I am learning React because I love it!'
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

// Create your own template and render it templateTwo
// root div, then h1 name, p age, p location

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'My name is Eric Bouvier'
    ),
    React.createElement(
        'p',
        null,
        'I am 26 years old.'
    ),
    React.createElement(
        'p',
        null,
        'I live in Indianapolis, Indiana.'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
