let balance = 0;
const list = document.getElementById("list");

function addIncome(){
  let income = document.getElementById("incomeInput").value;
  let date = document.getElementById("date").value;

  if(!income || !date) return;

  balance += Number(income);

  createItem("Income", income, "income", date);
  updateBalance();

  document.getElementById("incomeInput").value = "";
  document.getElementById("date").value = "";
}

function addExpense(){
  let name = document.getElementById("expenseName").value;
  let amount = document.getElementById("expenseAmount").value;
  let date = document.getElementById("date2").value;

  if(!name || !amount || !date) return;

  balance -= Number(amount);

  createItem(name, amount, "expense", date);
  updateBalance();

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
  document.getElementById("date2").value = "";
}


function createItem(name, amount, type, date){
  const li = document.createElement("li");

  li.innerHTML = `
    <div>
      <strong>${name}</strong><br>
      <small>${date}</small>
    </div>

    <span class="${type}">
      ${type==="income" ? "+" : "-"}${amount}
    </span>

    <button class="delete">❌</button>
  `;

  li.querySelector(".delete").onclick = () => {
    if(type === "income") balance -= Number(amount);
    else balance += Number(amount);

    li.remove();
    updateBalance();
  };

  list.appendChild(li);
}

function updateBalance(){
  document.getElementById("balance").innerText = "Balance: " + balance;
}

function toggleDark(){
  document.body.classList.toggle("dark");
}
