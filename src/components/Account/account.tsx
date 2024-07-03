import style from "./account.module.scss";

interface FeatureProps {
    title: string;
    amount: string;
    description: string;
}

const Account: React.FC<FeatureProps> = ({title, amount, description }) => {

  return (
    <section className={style.account}>
        <div className={style.contentWrapper}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.amount}>${amount}</p>
          <p className={style.description}>{description}</p>
        </div>
        <div className={`${style.accountContentWrapper} ${style.cta}`}>
          <button className={style.transactionButton}>View transactions</button>
        </div>
      </section>
  )
}



export default Account