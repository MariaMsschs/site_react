import styles from './Promo.module.css'
import seta from '../../assets/seta.png'

function Promo(){
    return(
        <div className= {styles.fundo}>
            <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="">Shop Now</a>
            </p>
            <div class={styles.container}>
                <select className={styles.dropdown} id="">
                    <option value="eng">English</option>
                    <option value="pt">Portuguese</option>
                </select>
            </div>
        </div>
    )
}

export default Promo;