import { Fragment } from 'react'
import Text from '../utility/text'
import '../../styling/footer/footer.css'

const Footer = ()=>{
    return(
        <>
            <footer className='footer'>
                <Text variant='footerText'>Copyright 2021 News Portal</Text>
            </footer>
        </>
    )
}

export default Footer