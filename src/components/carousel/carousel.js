import '../../styling/hero/hero.css'
import { useState, useEffect, Children, cloneElement } from 'react'
import Button from '../utility/button'

const Carousel = ({children})=>{
    const [currSlide, setCurrSlide] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            if(currSlide === Children.count(children) - 1) setCurrSlide(prev => prev = 0);
            setCurrSlide(prev => prev + 1)
        }, 3000);

        return ()=> clearInterval(interval);
    }, [currSlide, children])
    return(
        <>
            <div className="carousel">
                {Children.map(children, (child, index)=>{
                    return cloneElement(child, {transform: `translateX(${(index - currSlide) * 100}%)` }, child)
                })}
                <Button variant='button chevron-left'  onClickHandler={()=>{
                    if(currSlide === 0) setCurrSlide(Children.count(children) - 1);
                    setCurrSlide(prev => prev - 1)
                    console.log(currSlide)
                }}><img src='/images/chevron-left.svg' width='30' alt='button'/></Button>
                <Button variant='button chevron-right' onClickHandler={()=>{
                    if(currSlide === Children.count(children)-1) setCurrSlide( prev => prev = 0 );
                    setCurrSlide(prev => prev + 1)
                    console.log(currSlide);
                }}><img src='/images/chevron-right.svg' width='30' alt='button'/></Button>
            </div>
        </>
    )
}

export default Carousel