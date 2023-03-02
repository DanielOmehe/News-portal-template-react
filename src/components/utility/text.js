import '../../styling/footer/footer.css'
import '../../styling/hero/hero.css'
import '../../styling/navbar/navbar.css'
import '../../styling/main/main.css'

const Text = ({variant, children})=>{
    return <p className={variant}> { children } </p>
}

export default Text