import style from "./Hero.module.css";
import arrowIcon from '../../assets/icons8-arrow-50.png'
import playIcon from '../../assets/icons8-play-48.png'
import pauseIcon from '../../assets/icons8-pause-48 (1).png'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    return (
        <div  className={style.hero}>
            <div className={style.heroText}>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className={style.heroExplore}>
                <p>Explore the features</p>
                <img src={arrowIcon}/>
            </div>
            <div className={style.heroDotPlay}>
              <ul className={style.heroDots}>
                <li onClick={ () => setHeroCount(0)} className={heroCount === 0 ? `${style.heroDot} ${style.orange}` : style.heroDot}></li>
                <li onClick={ () => setHeroCount(1)} className={heroCount === 1 ? `${style.heroDot} ${style.orange}` : style.heroDot}></li>
                <li onClick={ () => setHeroCount(2)} className={heroCount === 2 ? `${style.heroDot} ${style.orange}` : style.heroDot}></li>
                <li onClick={ () => setHeroCount(3)} className={heroCount === 3 ? `${style.heroDot} ${style.orange}` : style.heroDot}></li>
                <li onClick={ () => setHeroCount(4)} className={heroCount === 4 ? `${style.heroDot} ${style.orange}` : style.heroDot}></li>
              </ul>
              <div  className={style.heroPlay}>
                <img onClick={() => setPlayStatus(!playStatus)} src={playStatus?pauseIcon:playIcon} alt="" />
                <p className={style.seeVideo}>See the video</p>
              </div>
            </div>
        </div>
    );
};

export default Hero;
