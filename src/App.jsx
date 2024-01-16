import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  function closePopUp() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          {isOpen && (
            <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-60 z-[90] flex justify-center items-center">
              <div className="w-[90%] lg:w-[30%] md:w-[40%] sm:w-[50%] bg-white h-[50%] z-[10] rounded-lg">
                <h1 className="text-green-400 text-5xl text-center py-5">
                  SUCCESS
                </h1>
                <p className="border-b text-center pb-3 mb-12">
                  Your Steam giftcard has been verified
                </p>

                <div className="w-[80%] pb-10 m-auto ">
                  <p className=" my-6 text-xl">
                    Brand:{" "}
                    <span className="font-bold capitalize">{inputs.cards}</span>
                  </p>
                  <p className=" mb-6 text-xl">
                    Amount:{" "}
                    <span className="font-bold capitalize">
                      {inputs.amount + " " + inputs.currency}
                    </span>
                  </p>
                  <p className=" mb-6 text-xl">
                    Status: <span className="font-bold capitalize">Not Actived</span>
                  </p>
                </div>
                <div className="buttons flex items-center justify-center gap-3">
                  <button
                    onClick={closePopUp}
                    className="py-3 px-7 rounded-md bg-slate-400 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closePopUp}
                    className="py-3 px-7 rounded-md bg-violet-600 text-white"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}
          <Form setIsOpen={setIsOpen} setInputs={setInputs} />
          {/* <Business /> */}
          <Billing />
          <CardDeal />
          {/* <Testimonials /> */}
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
