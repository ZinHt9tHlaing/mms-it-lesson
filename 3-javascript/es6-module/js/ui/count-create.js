export const createCounter = (counter,text) => {
    const p = document.createElement("p");
    p.innerHTML = `${text} : <span id='counter'>${counter}</span>`;
    return p;
}