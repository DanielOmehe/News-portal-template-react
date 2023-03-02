import '../../styling/hero/hero.css'
import Text from "../utility/text";
import Carousel from "../carousel/carousel";
import CarouselItem from "../carousel/carouselItem";

const Hero = ()=>{
    return(
        <>
            <div className='hero'>
                <Text variant='heroHeading'>Hot Topics</Text>
                <div className='content'>
                    <Carousel>
                        <CarouselItem>
                            <img className='bannerImage' src='/images/banner.png' alt='banner' />
                            <div className='bannerText'>
                                <Text variant='newsHeadline' >Massa tortor nibh nulla condimentum imperdiet scelerisque...</Text>
                                <div className='newsInfo'>
                                    <Text variant='timePosted'>2 Hours Ago</Text>
                                    <Text variant='credits'>CNN Indonesia</Text>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <img className='bannerImage' src='/images/fence.png' alt='banner' />
                            <div className='bannerText'>
                                <Text variant='newsHeadline'>Massa tortor nibh nulla condimentum imperdiet scelerisque...</Text>
                                <div className='newsInfo'>
                                    <Text variant='timePosted'>2 Hours Ago</Text>
                                    <Text variant='credits'>CNN Indonesia</Text>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <img className='bannerImage' src='/images/surf.png' alt='banner' />
                            <div className='bannerText'>
                                <Text variant='newsHeadline'>Massa tortor nibh nulla condimentum imperdiet scelerisque...</Text>
                                <div className='newsInfo'>
                                    <Text variant='timePosted'>2 Hours Ago</Text>
                                    <Text variant='credits'>CNN Indonesia</Text>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <img className='bannerImage' src='/images/swimmer.png' alt='banner' />
                            <div className='bannerText'>
                                <Text variant='newsHeadline'>Massa tortor nibh nulla condimentum imperdiet scelerisque...</Text>
                                <div className='newsInfo'>
                                    <Text variant='timePosted'>2 Hours Ago</Text>
                                    <Text variant='credits'>CNN Indonesia</Text>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <img className='bannerImage' src='/images/swimmer.png' alt='banner' />
                            <div className='bannerText'>
                                <Text variant='newsHeadline'>Massa tortor nibh nulla condimentum...</Text>
                                <div className='newsInfo'>
                                    <Text variant='timePosted'>2 Hours Ago</Text>
                                    <Text variant='credits'>CNN Indonesia</Text>
                                </div>
                            </div>
                        </CarouselItem>
                    </Carousel>
                    <div className='article'>
                        <article className='articleText'>
                            <span className='text'>Nisi, </span>
                            sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero