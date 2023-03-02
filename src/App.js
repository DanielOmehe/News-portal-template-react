import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer'
import NavBar from './components/header/navbar'
import Hero from './components/header/hero'
import { useState, useEffect } from 'react';

function App() {

  let baseurl = `https://inshorts.deta.dev/news?category=all`;
  const [value, setValue] = useState('');
  const [news, getNews] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, onError] = useState('');

  const search = ()=>{
    if(value !== '') baseurl = `https://inshorts.deta.dev/news?category=${value}`;

    console.log(value, baseurl)
  }

  useEffect(()=>{
    const fetchNews = async(url)=>{
      try{
        isLoading(true);
        const response = await fetch(url)
  
        if(response.ok){
          const { data } = await response.json();
          getNews(data)
        }else{
          onError('There was an Error while fetching the data')
          throw new Error(error)
        }
      }catch(error){
        onError(error)
      }finally{
        isLoading(false)
      }
    }

    fetchNews(baseurl)

    return ()=> {  }
  }, [baseurl, error])

  return (
    <div className='App'>
      <Header>
        <NavBar 
          value={value}
          handleChange={(e)=>setValue(e.target.value)}
          handleClick={search}
        />
        <Hero />
      </Header>
      <Main loading={loading} news={news} />
      <Footer />
    </div>
  );
}

export default App;