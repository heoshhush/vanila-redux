import { createStore } from 'redux';


const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

const Add = "Add";
const Minus = "Minus"

const countModifer = (count = 0, action ) => {
    switch(action.type){
        case Add :
            return count + 1
        case Minus :
            return count - 1
        default :
            return count;
    }
};

const countStore = createStore(countModifer);

const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange)

add.addEventListener('click', () => countStore.dispatch({ type: Add}));
minus.addEventListener('click', () => countStore.dispatch({ type: Minus}));

