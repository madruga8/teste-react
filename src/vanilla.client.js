 function Counter() {
    let count = 0;

    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.textContent = 'Click me';
    button.addEventListener('click', () => {
        count++;
        render();
    });
    div.appendChild(p);
    div.appendChild(button);

    function render() {
        p.textContent = `You clicked ${count} times`;
    }

    return {
        increment: () => {
            count++;
            render();
        },
        getCount: () => {
            return count;
        },
        render: () => {
            return div;
        },
    };
}

const counter = Counter();

document.body.appendChild(counter.render());
