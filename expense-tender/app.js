const form = document.querySelector("#form")
const text = document.querySelector("#text")
const amount = document.querySelector("#amount")
const history = document.querySelector("h3")
const balance = document.querySelector("#balance")
const plusmoney = document.querySelector("#money-plus")
const minusmoney = document.querySelector("#money-minus")
const lists = document.querySelector(".list")
const btn = document.querySelector(".btn")

let income = 0
let expense = 0
let total = 0

form.addEventListener("submit", function (e) {

  e.preventDefault()
  const li = document.createElement("li")
  const a = document.createElement('a');
  lists.append(li);


  let count = +amount.value
  li.innerText = `name : ${text.value} price : ${count}`
  li.id = count;

  li.append(a);
  a.classList.add('delete-btn')


  a.addEventListener('click', function () {
    li.remove();
    if (this.parentElement.id > 0) {
      plusmoney.textContent = plusmoney.textContent - Number(this.parentElement.id);
    }
    else{
      minusmoney.textContent = minusmoney.textContent - Number(this.parentElement.id);
    }
    balance.textContent = balance.textContent - Number(this.parentElement.id);

    income = 0;
  })

  if (amount.value > 0) {
    income += count
    plusmoney.innerText = `${income}`
  }
  else {
    expense += count
    minusmoney.innerText = `${expense}`
  }

  balance.textContent = Number(income + expense)

})

