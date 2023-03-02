import '../../styling/hero/hero.css'

const CarouselItem = ({children, transform})=>{
    return(
        <>
            <div className="carousel-item" style={{transform}}>{children}</div>
        </>
    )
}

export default CarouselItem