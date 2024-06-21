import Feature from "../Feature/feature";
import style from "./features.module.scss";

//icons
import chat from "../../assets/img/icon-chat.png"
import money from "../../assets/img/icon-money.png"
import security from "../../assets/img/icon-security.png"

//alts
const chatAlt = "Chat Icon";
const moneyAlt = "Money Icon";
const securityAlt = "Security Icon";

//Titles
const chatTitle = "You are our #1 priority";
const moneyTitle = "More savings means higher rates";
const securityTitle = "Security you can trust";

//Paragraphs content
const chatP = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.";
const moneyP = "The more you save with us, the higher your interest rate will be!";
const securityP = "We use top of the line encryption to make sure your data and money is always safe.";

const Features = () => {

  return (
    <section className={style.features}>
    <h2 className= {style.srOnly}>Features</h2>
    <div className={style.featuresDiv}>
    <Feature icon={chat} alt={chatAlt} title={chatTitle} paragraph={chatP} />
    <Feature icon={money} alt={moneyAlt} title={moneyTitle} paragraph={moneyP} />
    <Feature icon={security} alt={securityAlt} title={securityTitle} paragraph={securityP} /></div>
  </section>
  )
}

export default Features