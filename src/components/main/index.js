import Text from '../utility/text'
import '../../styling/main/main.css'

const Main = ({ loading, news })=>{
    return(
        <>
            <main className='content'>
                <section className='newsContainer'>

                    <Text variant='latestNews'> Latest News </Text>
                    <div className='newsCardGroup'>
                    {
                        loading ? 
                        null :
                        news.map(({author, id, imageUrl, time, title, url})=>{
                            return(
                                <div key={id} className='newsCard'>
                                    <div className='newsImage'>
                                        <img src={imageUrl} alt='newsimage' />
                                    </div>
                                    <div className='newsTitle'>
                                        <Text variant='heading'>
                                            <a href={url}> {title} </a>
                                        </Text>
                                        <div className='newsTimeline'>
                                            <Text variant='time'>{time}</Text>
                                            <Text variant='author'>{author}</Text>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                     }
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main