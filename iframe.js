document.addEventListener("DOMContentLoaded", () => {
  const calculator = document.querySelector("#calc");
  const weather = document.querySelector("#weather");
  const TicTacToe = document.querySelector("#tic");
  const pongGame = document.querySelector("#pong");

  document.querySelector("#openWeather").addEventListener("click", (e) => {
    e.preventDefault();
    calculator.classList.add("hidden");
    TicTacToe.classList.add("hidden");
    pongGame.classList.add("hidden");
    weather.classList.remove("hidden");
    // console.log("yes")
  });

  document.querySelector("#openTic").addEventListener("click", (e) => {
    e.preventDefault();
    calculator.classList.add("hidden");
    TicTacToe.classList.remove("hidden");
    pongGame.classList.add("hidden");
    weather.classList.add("hidden");
  });

  document.querySelector("#openPong").addEventListener("click", (e) => {
    e.preventDefault();
    calculator.classList.add("hidden");
    TicTacToe.classList.add("hidden");
    pongGame.classList.remove("hidden");
    weather.classList.add("hidden");
  });

  document.querySelector("#openCalc").addEventListener("click", (e) => {
    e.preventDefault();
    calculator.classList.remove("hidden");
    TicTacToe.classList.add("hidden");
    pongGame.classList.add("hidden");
    weather.classList.add("hidden");
  });
});
