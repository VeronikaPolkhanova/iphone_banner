import "./i18n.js";
import i18next from "i18next";

function openLinkApple() {
  window.open("https://apple.com/", "_blank");
}
function openLinkGoodle() {
  window.open("https://google.com/", "_blank");
}

const titleElement = document.getElementById("title");
const unlimitedElement = document.getElementById("unlimited");
const exclusiveElement = document.getElementById("exclusive");
const avatarsElement = document.getElementById("avatars");
const yearlyElement = document.getElementById("yearly");
const weeklyElement = document.getElementById("weekly");
const bestElement = document.getElementById("offer");
const yearlyYearPriceElement = document.getElementById("yearly-year-price");
const yearlyWeekPriceElement = document.getElementById("yearly-week-price");
const weeklyWeekPriceElement = document.getElementById("weekly-week-price");
const termsElement = document.getElementById("terms");
const privacyElement = document.getElementById("policy");
const restoreElement = document.getElementById("restore");
const continueElement = document.getElementById("continue");
const radios = document.querySelectorAll('input[type="radio"]');
const buttonYearly = document.getElementById("button-yearly");
const buttonWeekly = document.getElementById("button-weekly");
const yearLabel = document.getElementById("year-label");

continueElement.addEventListener("click", openLinkApple);

document.addEventListener("DOMContentLoaded", () => {
  const newLang = new URLSearchParams(window.location.search);
  i18next.changeLanguage(newLang, () => {
    titleElement.innerHTML = i18next.t("Get Unlimited <br>Access");
    unlimitedElement.innerHTML = i18next.t("Unlimited Art <br>Creation");
    exclusiveElement.innerHTML = i18next.t("Exclusive <br>Styles");
    avatarsElement.innerHTML = i18next.t("Magic Avatars <br>With 20% Off");
    yearlyElement.innerHTML = i18next.t("YEARLY ACCESS");
    weeklyElement.innerHTML = i18next.t("WEEKLY ACCESS");
    bestElement.innerHTML = i18next.t("BEST OFFER");
    yearlyYearPriceElement.innerHTML = i18next.t("Just {{price}} per year", {
      price: "$39.99",
    });
    yearlyWeekPriceElement.innerHTML = i18next.t("{{price}} <br>per week", {
      price: "$0.48",
    });
    weeklyWeekPriceElement.innerHTML = i18next.t("{{price}} <br>per week", {
      price: "$6.99",
    });
    termsElement.innerHTML = i18next.t("Terms of Use");
    privacyElement.innerHTML = i18next.t("Privacy Policy");
    restoreElement.innerHTML = i18next.t("Restore");
    continueElement.innerHTML = i18next.t("Continue");
  });

  radios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "year") {
        buttonWeekly.classList.remove("selected");
        buttonYearly.classList.add("selected");
        bestElement.classList.add("selected");
        yearLabel.classList.add("selected");
        continueElement.removeEventListener("click", openLinkGoodle);
        continueElement.addEventListener("click", openLinkApple);
      }
      if (this.value === "week") {
        buttonYearly.classList.remove("selected");
        buttonWeekly.classList.add("selected");
        bestElement.classList.remove("selected");
        yearLabel.classList.remove("selected");
        continueElement.removeEventListener("click", openLinkApple);
        continueElement.addEventListener("click", openLinkGoodle);
      }
    });
  });
});
