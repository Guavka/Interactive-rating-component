(function () {
  function init() {
    const baseCard = document.querySelector(".card-base");
    if (baseCard === null) {
      throw new Error("Error with base card!");
    }
    baseCard.style.display = "flex";

    const submitCard = document.querySelector(".card-submit");
    if (submitCard === null) {
      throw new Error("Error with submit card!");
    }
    submitCard.style.display = "none";

    const ratingForm = document.forms["ratingForm"];
    if (ratingForm === null) {
      throw new Error("Error with form!");
    }

    const ratingArray = document.querySelectorAll(".star");
    if (submitCard === null) {
      throw new Error("Error with rating buttons!");
    }

    const currentRating = document.getElementById("stars");
    if (currentRating === null) {
      throw new Error("Error with rating text!");
    }
    const maxRating = document.getElementById("stars-all");
    if (maxRating === null) {
      throw new Error("Error with max rating text!");
    }
    maxRating.innerHTML = ratingArray.length;

    return [baseCard, submitCard, ratingForm, ratingArray, currentRating];
  }

  function initListeners() {
    const [baseCard, submitCard, ratingForm, ratingArray, currentRating] =
      init();

    ratingArray.forEach((el) => {
      el.addEventListener("click", () => {
        rating = el.innerHTML;
      });
    });

    ratingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (rating === 0) {
        alert("Check rating please!");
        return;
      }

      baseCard.style.display = "none";
      submitCard.style.display = "flex";
      currentRating.innerHTML = rating;
    });
  }

  let rating = 0;
  try {
    initListeners();
  } catch (err) {
    console.log(err);
    //alert("Someone is wrong. Try again later!");
  }
})();
