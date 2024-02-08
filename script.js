const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const address = document.getElementById("address");
const pincode = document.getElementById("pincode");
const state = document.getElementById("state");
const country = document.getElementById("country");
const button = document.querySelector(".btn");
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");
const data3 = document.getElementById("data3");
const data4 = document.getElementById("data4");
const data5 = document.getElementById("data5");
const data6 = document.getElementById("data6");
const data7 = document.getElementById("data7");
const data8 = document.getElementById("data8");

button.addEventListener("click", (ele) => {
  data1.innerText = firstname.value;
  data2.innerText = lastname.value;
  var ele = document.getElementsByName("gender");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      data3.innerText = ele[i].value;
    }
  }
  data4.innerText = address.value;
  data5.innerText = pincode.value;
  const f1 = document.getElementById("idly");
  const f2 = document.getElementById("dosa");
  const f3 = document.getElementById("vada");
  if (f1.checked == true && f2.checked == true && f3.checked == true) {
    data6.innerHTML = "Idly<br>Dosa<br>Vada";
  } else if (f1.checked == true && f2.checked == true) {
    data6.innerHTML = "Idly<br>Dosa";
  } else if (f1.checked == true && f3.checked == true) {
    data6.innerHTML = "Idly<Br>Vada";
  } else if (f2.checked == true && f3.checked == true) {
    data6.innerHTML = "Dosa<br>Vada";
  } else if (f1.checked == true) {
    data6.innerHTML = "Idly";
  } else if (f2.checked == true) {
    data6.innerHTML = "Dosa";
  } else if (f3.checked == true) {
    data6.innerHTML = "Vada";
  } else {
    alert("place choose food items");
  }
  data7.innerText = state.value;
  data8.innerText = country.value;
});
