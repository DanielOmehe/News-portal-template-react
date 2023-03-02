import { useState } from 'react';
import Text from '../utility/text';
import Button from '../utility/button';
import Input from '../utility/input';
import '../../styling/navbar/navbar.css'


const NavBar = ({value, handleChange, handleClick})=>{

    const [search, searchOpen] = useState(false);

    const handleFocus = ()=>{
        searchOpen(() => true)
    }

    const handleBlur = (e)=>{
        searchOpen(() => false)
    }

    return(
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <Text variant='news'>News</Text>
                    <Text variant='portal'>Portal</Text>
                </div>
                <div className='controls'>
                    <div className={ search ? 'searchopen' : 'searchbox' }>
                        <Input 
                            variant={ search ? 'openInput' : 'searchInput'}
                            onChangeHandler={handleChange}
                            onFocusHandler={handleFocus}
                            onBlurHandler={ value !== '' ? null : handleBlur}
                            type='text'
                            placeholder='Type to search'
                            name='search'
                            value={value}
                        />
                        <Button 
                            variant='searchbutton'
                            onClickHandler={handleClick}
                        >
                            <img src='/images/search.png' alt='search' />
                        </Button>
                    </div>
                    <Button variant='menubutton'>
                        <img src='/images/bars.png' alt='menu' />
                    </Button>
                </div>
            </nav>
        </>
    )
}

export default NavBar