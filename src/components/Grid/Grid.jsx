import style from './Grid.module.css'
import Ps5 from '../../assets/ps5.png'
import Speakers from '../../assets/speakers.png'
import Mulher from '../../assets/mulher.png'
import Perfume from '../../assets/perfume.png'

function Grid(){
    return(
        <div className={style.container}>
            <div className={style.item1} >
                <img src={Ps5} className={style.img1}/>
                <div className={style.blocktext}>
                <h1 className={style.title}>PlayStation 5</h1>
                <p className={style.subtitle}>Black and White version of the PS5 coming out on sale.</p>
                <p className={style.shop}>Shop Now</p>
                </div>
            </div>

            <div className={style.item2} >
                <img src={Mulher} className={style.img2}/>
                <div  className={style.blocktext}>
                <h1 className={style.title2}>Womens´s collections</h1>
                <p className={style.subtitle}>Featured woman collections that give you another vibe.</p>
                <p className={style.shop} >Shop Now</p>
                </div>
            </div>

            <div className={style.item3} >
                <img src={Speakers} className={style.img}/>
                <div  className={style.blocktext}>
                <h1 className={style.title3}>Speakers</h1>
                <p className={style.subtitle}>Amazon wireless speakers</p>
                <p className={style.shop} >Shop Now</p>
                </div>
            </div>

            <div className={style.item3}>
                <img src={Perfume} className={style.img}/>
                <div  className={style.blocktext}>
                    <h1 className={style.title3}>Perfume</h1>
                    <p className={style.subtitle}>GUCCI INTENSE OUD EDP</p>
                    <p className={style.shop} >Shop Now</p>
                </div>
            </div>
        </div>
    )
}

export default Grid