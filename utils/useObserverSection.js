import { useContext, useState, useEffect} from 'react'
import { AppContext } from '../views/page'

const useObserverSection = sectionRef => {

    const { observer } = useContext(AppContext)

    useEffect(() => {
        const section = sectionRef.current
        if(observer.observer) {
            observer.observer(section)
        }
        if(observer.unobserve) {
            return () => {
                observe.unobserve(section)
            }
        }
    }, [observer])

}

export default useObserverSection