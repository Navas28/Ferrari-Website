import style from './Background.module.css'
import bgVideo  from '../../assets/ferrari-1.mp4'
import car1 from '../../assets/f1.jpg'
import car2 from '../../assets/f2.jpg'
import car3 from '../../assets/f3.jpg'
import car4 from '../../assets/f4.jpg'
import car5 from '../../assets/f5.jpg'

const Background = ({playStatus, heroCount}) => {
  
  if(playStatus) {
    return(
      <video className={`${style.Video} ${style.fadeIn}`} autoPlay loop >
        <source src={bgVideo} type='video/mp4'/>
      </video>
    )
  }
  else if(heroCount === 0)
  {
    return <img src={car1} className={` ${style.bgImage} ${style.fadeIn}`}/>
  }
  else if(heroCount === 1){
    return <img src={car2} className={` ${style.bgImage} ${style.fadeIn}`}/>
  }
  else if(heroCount === 2){
    return <img src={car3} className={` ${style.bgImage} ${style.fadeIn}`}/>
  }
  else if(heroCount === 3){
    return <img src={car4} className={` ${style.bgImage} ${style.fadeIn}`}/>
  }
  else if(heroCount === 4){
    return <img src={car5} className={` ${style.bgImage} ${style.fadeIn}`}/>
  }
}

export default Background