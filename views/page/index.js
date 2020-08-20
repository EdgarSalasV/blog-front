import Head from 'next/head'
import Aside from './aside'
import Header from './header'
import Footer from './footer'
import { createContext, useState, useEffect } from 'react'
import classes from './style.module.css'
export const AppContext = createContext(null)

const _body = `
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe fugit sunt earum rem. Tempore molestias delectus dolore laudantium cum non quaerat doloremque nihil! Rem eligendi corrupti magni expedita et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia officia, iste ad atque architecto temporibus nisi cupiditate fuga unde dicta, deleniti aut laudantium qui eaque repudiandae eligendi ullam praesentium facilis?  </p> 

<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia officia, iste ad atque architecto temporibus nisi cupiditate fuga unde dicta, deleniti aut laudantium qui eaque repudiandae eligendi ullam praesentium facilis?  </p> `

const ARTICLES = [
    {   
        title: '3D Rendering',
        icon: 'fas fa-cube',
        img: '/images/section-1/1.jpg',
        body: _body
    }, 
    {
        title: 'Virtual Reality',
        icon: 'fa fa-robot',
        img: '/images/section-1/3.jpg',
        body: _body
    },
    {
        title: 'Real State Video',
        icon: 'fa fa-home',
        img: '/images/section-1/2.jpg',
        body: _body
    }
]


const index = ({ children }) => {
    const [hash, setHash] = useState('what-we-do')
    const [observer, setObserver] = useState({})
    const [articles, setArticles] = useState(ARTICLES)

    const selectArticle = article => {
        const tmpArticles = articles.filter(({ title }) => title !== article.title)
        tmpArticles.unshift(article)
        setArticles(tmpArticles)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([ { target } ]) => {
            setHash(target.id)
        })
        setObserver(observer)
    }, [])

    return (
        <AppContext.Provider value={{
            hash, observer, articles, selectArticle
        }}>
            <Aside />
            <div style={{ padding: 'var(--pad-global)'}}>
                <Head>
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                </Head>
                <Header />
                <main className={classes.mainContainer}> {children} </main>
                <Footer />
            </div>
        </AppContext.Provider>
    );
};

export default index;
