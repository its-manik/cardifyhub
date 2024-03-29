import { apple, bill, google } from "../assets";
import crypto from "../assets/1.png";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className="flex md:flex-row flex-col-reverse gap-20 sm:py-16 py-6">
    <div className={layout.sectionImgReverse}>
      <img src={crypto} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Decentralized
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our smart frameworks is built on a decentralized platform to ensure clients gift card details are not stored anywhere in the server. Your card details are immediately deleted after verification operations.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
