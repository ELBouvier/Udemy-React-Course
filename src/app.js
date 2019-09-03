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

var locationCheck = (location) => {
    if(location) {
        return <p>Location: {location}</p>; 
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>{user.age >= 20 ? 'Age:' + user.age : 'Too young.'}</p>
        {locationCheck(user.location)}
    </div>
);

let appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)