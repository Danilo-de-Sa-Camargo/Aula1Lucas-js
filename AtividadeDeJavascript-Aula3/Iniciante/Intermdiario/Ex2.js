const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa;

do {
  tentativa = parseInt(prompt("Tente adivinhar o número (1 a 100):"));

  if (tentativa < numeroSecreto) {
    console.log("Muito baixo. Tente novamente.");
  } else if (tentativa > numeroSecreto) {
    console.log("Muito alto. Tente novamente.");
  } else {
    console.log("Parabéns! Você acertou!");
  }

} while (tentativa !== numeroSecreto);
