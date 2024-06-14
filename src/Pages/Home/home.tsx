import Features from "../../Components/Features/features";
import Hero from "../../Components/Hero/hero";
import style from "./home.module.scss";


function Home() {
  

  //render

  return (
    <main className={style.main}>
        <Hero/>
        <Features/>
    </main>
  );
}

export default Home;