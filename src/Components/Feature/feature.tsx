import style from "./feature.module.scss";

interface FeatureProps {
    icon: string;
    alt: string;
    title: string;
    paragraph: string;
}

const Feature: React.FC<FeatureProps> = ({icon, alt, title, paragraph }) => {

  return (
    <div className={style.featureItem}>
          <img src={icon} alt={alt} className= {style.featureIcon} />
          <h3 className={style.featureItemTitle}>{title}</h3>
          <p>
            {paragraph}
          </p>
        
  </div>
  )
}



export default Feature