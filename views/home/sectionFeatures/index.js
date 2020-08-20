import { useRef } from 'react'
import useObserverSection from '../../../utils/useObserverSection'
import Article from './article'
import Grid from './Grid'

const index = () => {
    const sectionRef = useRef()
    useObserverSection(sectionRef)
    
    return (
        <div id='what-we-do' ref={sectionRef}>
            <Grid />
            <Article />
        </div>
    )
}

export default index
