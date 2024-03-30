let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let btn = document.getElementById("ClickSubmit");
let input = document.querySelectorAll(".prog_input_cont input")
let label = document.querySelectorAll(".prog_input_cont label") 
let textreq = document.querySelectorAll(".prog_input_cont h6")

let age_year = document.getElementById("age_year");
let age_month = document.getElementById("age_month");
let age_day = document.getElementById("age_day");

// error 
let errorday = document.getElementById("errorday");
let errormonth = document.getElementById("errormonth");
let erroryear = document.getElementById("erroryear");

function clearOutput() {
    age_year.innerText = "--"
    age_month.innerText = "--"
    age_day.innerText = "--"
}

btn.addEventListener("click", () => {
    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    if (day.value == "" || month.value == "" || year.value == "") {
        clearOutput()
        textreq.forEach((element) => {
            element.innerText = "This field is required"
        })
    }
    if(day.value < 1 || day.value > 31 || month.value < 1 || month.value > 12 || year.value < 1 || year.value > currentYear) {
        age_year.innerText = "--"
        age_month.innerText = "--"
        age_day.innerText = "--"
        if (day.value < 1 || day.value > 31) {
            errorday.innerText = "Please enter a valid day"
        }
        if (month.value < 1 || month.value > 12) {
            errormonth.innerText = "Please enter a valid month"
        }
        if (year.value < 1 || year.value > currentYear) {
            erroryear.innerText = "Please enter a valid year"
        }
    }
    else {
        if (month.value < currentMonth) {
            age_year.innerText = currentYear - year.value
            age_month.innerText = currentMonth - month.value
            age_day.innerText = currentDay - day.value
        }
        else if (month.value > currentMonth) { 
            age_year.innerText = currentYear - year.value - 1
            age_month.innerText = 12 - month.value + currentMonth
            age_day.innerText = currentDay - day.value
        }
        else if (month.value == currentMonth) {
            if (day.value < currentDay) {
                age_year.innerText = currentYear - year.value
                age_month.innerText = 0
                age_day.innerText = currentDay - day.value
            }
            else if (day.value > currentDay) {
                age_year.innerText = currentYear - year.value - 1
                age_month.innerText = 11
                age_day.innerText = 31 - day.value + currentDay
            }
            else if (day.value == currentDay) {
                age_year.innerText = currentYear - year.value
                age_month.innerText = 0
                age_day.innerText = 0
            }
        }
    }
})