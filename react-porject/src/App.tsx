import "./App.css";
import "./pages/pages.css";
import Confrim from "./pages/confrim";
import Info from "./pages/info";
import Phone from "./pages/phone";
import SocialMedia from "./pages/socialMedia";
import { useState } from "react";
import { useFormProviderContext } from "./context/formContext";

function App() {
  const [numberPage, setsNumberPage] = useState(0);
  const components = [<Info />, <Phone />, <SocialMedia />, <Confrim />];

  const { canGoStepTwo } = useFormProviderContext();
  const nextPage = () => {
    if (numberPage === 0) {
      const res = canGoStepTwo();
      if (!res) return;
    }
    numberPage < 3 && setsNumberPage((prev) => prev + 1);
    if (numberPage == 0) {
    }
  };
  const previousPage = () => {
    numberPage > 0 && setsNumberPage((prev) => prev - 1);
  };

  return (
    <div>
      {components[numberPage]}
      <footer>
        <div className="footer-pages">
          <button
            className={numberPage == 0 ? "perbtn-tow" : "perbtn"}
            onClick={previousPage}
          >
            Previos
          </button>
          {numberPage == 3 ? (
            <button className="nextbtn" onClick={nextPage}>
              Submit
            </button>
          ) : (
            <button className="nextbtn" onClick={nextPage}>
              Next
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
