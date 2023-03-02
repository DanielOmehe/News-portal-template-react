import '../../styling/placeholder/placeholder.css'
import Text from '../utility/text'

const ContentPlaceholder =()=>{
    return(
        <>
            <div className='newsCard'>
                <div className='newsImage animated-bg'></div>
                <div className='newsTitle'>
                    <Text variant='heading'>
                        <span className='animated-bg animated-bg-text'></span>
                        <span className='animated-bg animated-bg-text'></span>
                        <span className='animated-bg animated-bg-text'></span>
                    </Text>
                    <div className='newsTimeline'>
                        <Text variant='time animated-bg animated-bg-text'></Text>
                        <Text variant='author animated-bg animated-bg-text'></Text>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentPlaceholder