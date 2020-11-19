const singleListPriceInput = document.getElementById('calcSingleListPrice');
const countListInput = document.getElementById('countListInput');

const totalListPriceDay = document.getElementById('totalListPriceDay');
const totatListPriceMounth = document.getElementById('totatListPriceMounth');
const totalListPriceYear = document.getElementById('totalListPriceYear');

const persentResult2 = document.getElementById('persentResult2');
const persentResult3 = document.getElementById('persentResult3');
const persentResult4 = document.getElementById('persentResult4');
const persentResult5 = document.getElementById('persentResult5');
const persentResult10 = document.getElementById('persentResult10');
const persentResult15 = document.getElementById('persentResult15');

singleListPriceInput.addEventListener('change', function (event) {
    const enteredSinglePrice = event.target.value;
    
    render(enteredSinglePrice, countListInput.value);
});

countListInput.addEventListener('change', function(event) {
    const enteredListCount = event.target.value;

    render(singleListPriceInput.value, enteredListCount)
});


const render = (price, list) => {
    totalListPriceDay.textContent = Math.round(price * list);
    totatListPriceMounth.textContent = Math.round(Number(totalListPriceDay.textContent) * 22);
    totalListPriceYear.textContent = Math.round(Number(totatListPriceMounth.textContent) * 12);

    const totalYearPrice = Math.round(Number(totalListPriceYear.textContent));

    persentResult2.textContent = Math.round(totalYearPrice * 0.02);
    persentResult3.textContent = Math.round(totalYearPrice * 0.03);
    persentResult4.textContent = Math.round(totalYearPrice * 0.04);
    persentResult5.textContent = Math.round(totalYearPrice * 0.05);
    persentResult10.textContent = Math.round(totalYearPrice * 0.1);
    persentResult15.textContent = Math.round(totalYearPrice * 0.15);
};

render(singleListPriceInput.value, countListInput.value)