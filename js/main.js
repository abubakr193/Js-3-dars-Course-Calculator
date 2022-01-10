var elForm = document.querySelector('.money__form');
var elInput = elForm.querySelector('.money__input');
var elSelect = elForm.querySelector('.money__select');
var elResult = elForm.querySelector('.money__result');

// Course
var usdCourse = 10900;
var rublCourse = 144;
var euroCourse = 12500;


elForm = addEventListener('submit', function (evt){
    evt.preventDefault();

    var selectValue = elSelect.value;
    var inputValue = elInput.value;
    var calculatorUsd = (inputValue / usdCourse).toFixed(3);
    var calculatorRubl = (inputValue / rublCourse).toFixed(3);
    var calculatorEuro = (inputValue / euroCourse).toFixed(3);

    // var elInput = Number(elInput.value.trim());

    // if (isNaN(elInput)) {

    //     elResult.textContent = 'Raqamni kiriting!';
    //     return;
    // }

    if (selectValue == 'usd') {
        elResult.textContent = calculatorUsd;
    }

    else if(selectValue == 'rubl'){
        elResult.textContent = calculatorRubl
    }

    else if (selectValue == 'euro'){
        elResult.textContent = calculatorEuro
    }

})