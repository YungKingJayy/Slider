const slider = document.getElementById('slider')
const selector = document.getElementById('selector')
const selectValue = document.getElementById('selectValue')
const selectWords = document.getElementById('selectWords')
const progressBar = document.getElementById('progressBar')
const free = document.getElementById('free')
const paid = document.getElementById('paid')
const enterprise = document.getElementById('enterprise')
const support = document.getElementById('support')


selectValue.innerHTML = slider.value
selectWords.innerHTML = `FREE`

slider.oninput = function () {
    let value = Math.round(((this.value / 100) * 700000) / 1000)
    selectValue.innerHTML = `${value}K`
    if (value <= 50) {
        selectWords.innerHTML = `FREE`
        free.classList.add('active')
        paid.classList.remove('active')
        enterprise.classList.remove('active')
        support.classList.remove('active')
        console.log("free");
    } else if (value <= 300) {
        selectWords.innerHTML = `$${value}`
        free.classList.remove('active')
        paid.classList.add('active')
        enterprise.classList.remove('active')
        support.classList.remove('active')
        console.log("paid");
    }
    else if (value < 700) {
        selectWords.innerHTML = `$${value}`
        free.classList.remove('active')
        paid.classList.remove('active')
        enterprise.classList.add('active')
        support.classList.remove('active')
        console.log("enterprise");
    }
    else {
        selectWords.innerHTML = `Support`
        free.classList.remove('active')
        paid.classList.remove('active')
        enterprise.classList.remove('active')
        support.classList.add('active')
        console.log("support");
    }
    selector.style.left = this.value + '%'
    progressBar.style.width = this.value + '%'
}
