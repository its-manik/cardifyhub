import security from "../assets/security.png";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Secured and Encrypted
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We at cardcertify makes sure customers giftcard details are secured and encrypted. No attacker or false identity can intercept your verification operations
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={security} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
