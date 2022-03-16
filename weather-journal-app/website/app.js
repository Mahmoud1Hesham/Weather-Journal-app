/* Global Variables */
// First the key to our api ...
const apiKey = "831c5dc788c51d31c633cf78bc0b8732&units=imperial";
// Then the rest of all variables so we don't forget'em (;
const zipp = document.getElementById("zip");
const feel = document.getElementById("feelings");
const datee = document.getElementById("date");
const tempp = document.getElementById("temp");
const contentt = document.getElementById("content");

// Create a new date instance dynamically with JS .
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Making our generate button active by adding an event listener with a function that calls our api and interact with it .
const generate = document
  .getElementById("generate")
  .addEventListener("click", async () => {
    // Splitted into 3 steps
    try {
      let zipCode = zipp.value;
      let feels = feel.value;
      // Step one : creating our url and fetch it then transform it into json format .
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
      let resposne = await fetch(baseUrl)
        .then((res) => res.json())
        .then(setTimeout(updateUi, 200));

      let tempreture = await resposne.main.temp;
// Step Two : fetching the data and storing it in the object
      await fetch("/post", {
        method: "post",
        credentials: "same-origin",
        headers: {
          " Content-Type": "application/json",
        },
        body: JSON.stringify({
          datee: newDate,
          tempp: tempreture,
          feels: feelings,
        }),
      });
      // Step three : Updating UI ...
      async function updateUi() {
        if (resposne !== null) {
          tempp.innerHTML = `The Temprature is : ${tempreture}`;
          datee.innerHTML = `The Date is : ${newDate}`;
          contentt.innerHTML = `Your feeling is : ${feels}`;
        }
      }
    } catch (err) {
      console.error("An error has been detected !", err);
    }
  });
