const inputElemnts = document.querySelectorAll(".card__input");
const clickedButton = document.querySelector(".card__button")

const ageCalculator = (year, month, day) => {
    const currentDate = new Date();
    const birthDate = new Date(year, month -1, day);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDif = currentDate.getMonth() - birthDate.getMonth();
    
    if (monthDif < 0 || (monthDif === 0 && birthDate.getDay() < currentDate.getDay())) {
        age - 1;
    }
    return age;
};

const validateDay = (day) => {
        if(day && day > 0 && day <= 31) {
            return true
        }
};

const validateMonth = (month) => {
    if(month && month > 0 && month <= 12) {
        return true
    }
};

const validateYear = (year) => {
    const currentDate = new Date().getFullYear();
    if(year && year <= currentDate && year > 0) {
        return true;
    }
};

const isValidate = (yearElement, monthElement, dayElement ) => {
    let validationMeasure = [false, false, false];
    
    if (!validateDay(dayElement.value)) {
        dayElement.classList.add('card__input--error');
    }else {
        validationMeasure[0] = true;
        dayElement.classList.remove('card__input--error');
    }

    if (!validateMonth(monthElement.value)) {
        monthElement.classList.add('card__input--error');
    }else {
        validationMeasure[1] = true;
        monthElement.classList.remove('card__input--error');
    }


    if (!validateYear(yearElement.value)) {
        yearElement.classList.add('card__input--error');
    }else {
        validationMeasure[2] = true;
        yearElement.classList.remove('card__input--error');
    }


  return validationMeasure.every((item) => item === true);
};








const getAgeOnClick = () => {

const dayElement = document.querySelector('.card__input[name="day"]');
const monthElement = document.querySelector('.card__input[name="month"]');
const yearElement = document.querySelector('.card__input[name="year"]');
const result = document.querySelector('.card__resultValue');

if(!isValidate(yearElement,monthElement,dayElement)) {
    result.textContent = '--';

    return;
}

result.textContent = ageCalculator(yearElement.value, monthElement.value, dayElement.value).toString();
};


inputElemnts.forEach ((item) => {
    item.addEventListener('keydown' ,(event) => {
    event.key === 'Enter' && getAgeOnClick();
})
});



clickedButton.addEventListener('click', getAgeOnClick);


