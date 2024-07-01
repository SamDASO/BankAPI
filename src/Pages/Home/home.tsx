import Features from "../../components/Features/features";
import Hero from "../../components/Hero/hero";
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