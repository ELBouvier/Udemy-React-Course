console.log('hello')

// JSX Javascript XML (syntax extension)

let template = (
    <div>
        <h1>My name is Eric Bouvier</h1>
        <p>I am learning React because I love it!</p>
        <ol>
            <li>so much</li>
            <li>so so much</li>
        </ol>
    </div>
);

// Create your own template and render it templateTwo
// root div, then h1 name, p age, p location

let templateTwo = (
    <div>
        <h1>My name is Eric Bouvier</h1>
        <p>I am 26 years old.</p>
        <p>I live in Indianapolis, Indiana.</p>
    </div>
)

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)