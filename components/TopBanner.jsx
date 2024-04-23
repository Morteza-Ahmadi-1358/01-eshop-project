import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './TopBanner.module.css'
import { GET } from '@/repository/axiosRepository'

const TopBanner = () => {
    const [topBannerObject, setTopBannerObject] = useState({})
    useEffect(() => {
        GET('topBanner')
        .then(response => setTopBannerObject(response.data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div style={{height:'50px'}}>
            <Image fill className={`${styles.image}`} src={topBannerObject.imageUrl} alt='Top Banner' />
        </div>
    )
}

export default TopBanner