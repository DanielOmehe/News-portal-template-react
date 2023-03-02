import '../../styling/hero/hero.css'
const Button = ({variant, onClickHandler, children})=>{
    return <button className={variant} onClick={onClickHandler}> {children} </button>
}

export default Button