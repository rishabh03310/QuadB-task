
const p = document.getElementsByClassName("table");
const info = {
  loading: true,
  data: [],
  error: "",
};

async function getData() {
  const res = await fetch('http://localhost:4000/data')
  const fetchData = await res.json()
  console.log(fetchData.data)
  info.data = fetchData.data;
  info.loading = false
  info.error = ""
}
getData()

const insertData = document.getElementById("insertData");

const setData = () => {
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");

    tr.innerHTML = `<tr>
      <td><h4>${i + 1}</h4></td>
      <td><h4>${info.data[i].key}</h4></td>
      <td><h4>₹ ${info.data[i].last}</h4></td>
      <td><h4> <span style="display : inline-block">₹ ${info.data[i].buy
      } / </span><span style="display : inline-block"> ₹ ${info.data[i].sell
      }</span></h4></td>
      <td><h4>${info.data[i].volume}</h4></td>
      <td><h4>${info.data[i].base_unit}</h4></td>
      </tr>`;
    insertData.appendChild(tr);
  }
}
setTimeout(() => setData(), 2000);



const insertData2 = document.getElementById("a")

function setData2() {
  console.log(info.data.length)
  for (let i = 0; i < info.data.length; i++) {
    const a = document.createElement("a")

    a.className = "dropdown-item"
    a.tabIndex = "0"
    a.role = "menuitem"
    a.value = info.data[i].base_unit
    a.innerHTML = `${info.data[i].base_unit}`

    insertData2.appendChild(a)
  }
}
setTimeout(() => setData2(), 2000)

const root = document.getElementById("root");

function themeChange() {
  root.classList.toggle("theme-dark");
  root.classList.toggle("theme-light");
}

var countDownDate = new Date("2080 20:50:50").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
    

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
  document.getElementById("countdown").innerHTML = seconds;
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
