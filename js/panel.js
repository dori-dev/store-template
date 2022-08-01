function togglePanel() {
  let panel = document.querySelector("#panel #right");
  let content = document.querySelector("#panel #left");
  console.log();
  if (panel.className == "col-lg-2 col-md-2") {
    panel.classList.replace("col-lg-2", "col-lg-1");
    panel.classList.replace("col-md-2", "col-md-1");
    content.className = "col-lg-11 col-md-11";
    active_user_name_arrow(0);
    activeTextMenuBtn(0);
    activeUserDetails(0);
  } else {
    panel.classList.replace("col-lg-1", "col-lg-2");
    panel.classList.replace("col-md-1", "col-md-2");
    content.className = "col-lg-10 col-md-10";
    active_user_name_arrow(1);
    activeTextMenuBtn(1);
  }
}

function activeTextMenuBtn(flag) {
  let btn_menu_items = document.querySelectorAll(".menu-buttons .item");
  let item_texts = document.querySelectorAll(".menu-buttons .item span");
  if (flag) {
    btn_menu_items.forEach((ele) => {
      ele.style.justifyContent = "space-between";
      ele.style.padding = "20px 10px";
      ele.style.margin = "10px 18px";
    });
    item_texts.forEach((ele) => {
      ele.style.display = "block";
    });
  } else {
    btn_menu_items.forEach((ele) => {
      ele.style.justifyContent = "center";
      // ele.style.paddingRight = "0px";
    });
    item_texts.forEach((ele) => {
      ele.style.display = "none";
    });
  }
}

function toggleUserDetails() {
  let userDetails = document.querySelector(".user-info .details");
  let arrow = document.querySelector(".user-info .image-name i");
  if (getComputedStyle(userDetails, null).display == "none") {
    userDetails.style.display = "block";
    arrow.className = "fa-solid fa-angle-up";
  } else {
    console.log("what");
    userDetails.style.display = "none";
    arrow.className = "fa-solid fa-angle-down";
  }
}

function activeUserDetails(flag) {
  let userDetails = document.querySelector(".user-info .details");
  let arrow = document.querySelector(".user-info .image-name i");
  if (flag) {
    userDetails.style.display = "block";
    arrow.className = "fa-solid fa-angle-up";
  } else {
    userDetails.style.display = "none";
    arrow.className = "fa-solid fa-angle-down";
  }
}

function active_user_name_arrow(flag) {
  let imgNameBox = document.querySelector(".user-info .image-name");
  let name = document.querySelector(".user-info .image-name .name");
  let arrow = document.querySelector(".user-info .image-name i");
  if (flag) {
    name.style.display = "block";
    arrow.style.display = "block";
    imgNameBox.style.justifyContent = "space-between";
  } else {
    name.style.display = "none";
    arrow.style.display = "none";
    imgNameBox.style.justifyContent = "center";
  }
}

var ctx = document.getElementById("revenueChart").getContext("2d");
var revenueChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["هندزفری", "هدفون", "کیف هندزفری", "محافظ", "شارژر "],
    datasets: [
      {
        label: "",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
        ],

        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {},
    responsive: true,
    maintainAspectRatio: false,
  },
});
