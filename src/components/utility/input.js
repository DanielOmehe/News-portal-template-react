const Input = ({
    variant,
    onChangeHandler, 
    onFocusHandler, 
    onBlurHandler,
     ...rest
    })=>{
    return <input 
            className={variant} 
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            {...rest} />
}

export default Input