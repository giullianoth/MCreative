import { addClass, isActive, portfolioBtns, portfolioSites, removeClass, setStyle } from "../variables.js";

export default function FilterPortfolio() {

    const landingPages = portfolioSites.filter((site) => site.dataset.category === "landing-page");
    const stores = portfolioSites.filter((site) => site.dataset.category === "store");
    const institutionalWebsites = portfolioSites.filter((site) => site.dataset.category === "institutional-website");

    portfolioBtns.forEach((btn, i, arr) => {
        btn.addEventListener("click", () => {

            arr.forEach((b) => {
                if (isActive(b)) {
                    removeClass(b, "active");
                }
            })

            addClass(btn, "active");

            switch (btn.dataset.filter) {
                case "all":
                    portfolioSites.forEach((site) => setStyle(site, "display", "block"));
                    break;

                case "landing-pages":
                    portfolioSites.forEach((site) => setStyle(site, "display", "none"));
                    landingPages.forEach((site) => setStyle(site, "display", "block"));
                    break;

                case "stores":
                    portfolioSites.forEach((site) => setStyle(site, "display", "none"));
                    stores.forEach((site) => setStyle(site, "display", "block"));
                    break;

                case "institutional-websites":
                    portfolioSites.forEach((site) => setStyle(site, "display", "none"));
                    institutionalWebsites.forEach((site) => setStyle(site, "display", "block"));
                    break;
            }
        })
    })
}