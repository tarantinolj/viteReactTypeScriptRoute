import React, { FC, useState } from 'react'
import styles from './Gallery.module.scss'
import cn from 'clsx'


const Gallery :FC<{images: string[]}> = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.gallery}>
        <div className={cn(styles.image, styles.main)}
            style={{
            backgroundImage: `url(${images[currentIndex]})`
        }}/>

        <div className={styles.list}>
            {images.map((image, index)=>(
                 <button
                  key={image} 
                  onClick={()=>setCurrentIndex(index)} className={cn(styles.item,{
                    [styles.active]: index === currentIndex
                 })}>
                 <div className={styles.image}
                         style={{
                         backgroundImage: `url(${image})`
                 }}/>
             </button>
            ))}
       
        </div>
  

    </div>
  )
}

export default Gallery