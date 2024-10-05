/**
 * GET ELEMENTS
 */

const /** {NodeElement} */ historyBtn = document.querySelectorAll('[data-history-toggler]');

const /** {NodeElement} */ historyTab = document.querySelector('[data-history]');
const /** {NodeElement} */ overlay = document.querySelector('[data-overlay]');


const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener(eventType, callback);
    }
}


const toggleHistory = function () {
    historyTab.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElements(historyBtn, "click", toggleHistory);




/**
 * Main Function
 */

const userInput = document.querySelector('[data-calc-input]');
const resultInput = document.querySelector('[data-result-input]');
const historyList = document.querySelector("[data-history-list]");
const historyClearBtn = document.querySelector("[data-history-clearBtn]");

let currentInput = '';
let historyArray = [];

const oparetorMapping = {
    '×': '*',
    '÷': '/'
};


const calcad = function (value) {
    if (oparetorMapping[value]) {
        currentInput += oparetorMapping[value];
        userInput.value += value;
    } else {
        currentInput += value;
        userInput.value += value;
    }
};



const calculated = function () {
    if (currentInput.length == 0 || currentInput.length == '') {
        alert('Need a input');
        return;
    }
    try {
        userInput.value += " =";
        result = eval(currentInput);
        resultInput.value = result;
        currentInput = result.toString();

        addToHistory(userInput.value, result);
    }
    catch {
        resultInput.value = 'error';
    }
};

const clearAll = function () {
    currentInput = '';
    userInput.value = '';
    resultInput.value = '';
};

function negation() {
    if (currentInput.length === 0) {
        return;
    }

    let lastNumber = currentInput.match(/-?\d+\.?\d*$/);

    if (lastNumber) {
        lastNumber = lastNumber[0];

        if (lastNumber.startsWith('-')) {
            currentInput = currentInput.slice(0, currentInput.lastIndexOf(lastNumber)) + lastNumber.slice(1);
        } else {
            currentInput = currentInput.slice(0, currentInput.lastIndexOf(lastNumber)) + '-' + lastNumber;
        }

        userInput.value = currentInput;
    }
};

const del = function () {
    currentInput = currentInput.substring(0, currentInput.length - 1);

    let displayValue = userInput.value;

    displayValue = displayValue.substring(0, displayValue.length - 1);

    userInput.value = displayValue;
};


const addToHistory = function (inputValue, resultValue) {
    historyList.innerHTML = '';

    const noHistoryMessage = historyList.querySelector('p');
    if (noHistoryMessage) {
        noHistoryMessage.remove();
    }

    historyArray.push({ input: inputValue, result: resultValue });


    historyArray.forEach(item => {
        const historyItem = `
            <div class="history-item">
                <p class="input-value">${item.input}</p>
                <p class="result">${item.result}</p>
            </div>
        `;
        historyList.innerHTML += historyItem;
    });
};



historyClearBtn.addEventListener("click", e => {
    historyList.innerHTML = '';
});
