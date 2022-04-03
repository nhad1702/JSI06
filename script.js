// const domEl = document.createElement('h1');
// console.dir(domEl);
// domEl.innerText = 'Hello';

const rootEl = document.getElementById("root");
// rootEl.appendChild(domEl);

// const ulEl = document.createElement('ul');
// console.dir(ulEl);

// const liEl = document.createElement('li');
// liEl.innerText = 'Text 1';
// const liEl1 = document.createElement('li');
// liEl1.innerText = 'Text 2';
// const liEl2 = document.createElement('li');
// liEl2.innerText = 'Text 3';

// rootEl.appendChild(ulEl);
// ulEl.appendChild(liEl);
// ulEl.appendChild(liEl1);
// ulEl.appendChild(liEl2);

// function renderList(num) {
//     for (let i = 0; i < num; i++) {
//         const li = document.createElement('li');
//         li.innerText = `Text ${i + 1}`;
//         ulEl.appendChild(li);
//     }
//     rootEl.appendChild(ulEl);
// }

// renderList(100)

// console.log("React", React);

const reactEl = React.createElement('h1', {
    className: "greeting",
    id: "greet",
    style: {
        // color: 'red'
    }
},
    [
        React.createElement('span', 
        {}, 
        React.createElement('b', {}, "Span1")
        ),
        React.createElement('span',
        {},
        React.createElement('b', {}, "Span2")
        ),
        React.createElement('span', 
        {}, 
        React.createElement('b', {}, "Span3")
        ),
    ]
);


// rootReactEl.render(reactEl1);

const rootReactEl = ReactDOM.createRoot(rootEl);
// console.log(ReactDOM)
rootReactEl.render(reactEl);

// console.log(reactEl);

const num = [1, 2, 3, 4, 5];
let res = num.map( (number) => {
    return number ** 2;
});
// for (let i = 0; i < num.length; i++) {
//     res.push(num[i] ** 2);
// }