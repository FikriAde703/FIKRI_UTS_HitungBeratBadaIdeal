document.addEventListener("DOMContentLoaded", function () {
  const heightInput = document.getElementById("height");
  const calculateButton = document.getElementById("calculate");
  const resetButton = document.getElementById("reset");
  const idealWeightSpan = document.getElementById("idealWeight");

  calculateButton.addEventListener("click", function () {
      const height = parseFloat(heightInput.value);
      if (!isNaN(height)) {
          const idealWeight = (height - 100) - (0.1 * (height - 100));
          idealWeightSpan.textContent = idealWeight.toFixed(2) + " kg";
      }
  });

  resetButton.addEventListener("click", function () {
      heightInput.value = "";
      idealWeightSpan.textContent = "0 kg";
  });
});
