console.log("this is my script");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "ashutoshashu2001",
  email: "ashutoshashu2001@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

let submitbtn = document.querySelector(".submit-button"); // Select your submit button with the class "submit-button"

submitbtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked");
  let key = "ema_live_4MlI3FDkOQllWiCawLHLt3WBY4fqE8GMsKDvjhHP";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  
  try {
    let res = await fetch(url); // Fetch data from the API
    let result = await res.json(); // Parse the JSON response

    let str = "";
    for (let key of Object.keys(result)) {
      str += `<div>${key}: ${result[key]}</div>`;
    }
    console.log(str);

    let resultcont = document.getElementById("resultcont");
    resultcont.innerHTML = str;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
