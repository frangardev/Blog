import React from 'react'
import * as styles from './MiniTag.module.css';

type MiniTagProps = {tag:string, isFirstTag:boolean}

function MiniTag({tag, isFirstTag}:MiniTagProps) {
    const [colorTag, setColorTag] = React.useState(styles.develop)
    const [miniNameTag, seMiniNameTag] = React.useState('DEV')

    React.useEffect(()=>{
        switch (tag) {
          case 'develop':
            setColorTag(styles.develop) 
            seMiniNameTag('DEV')
            break;   
          case 'design':
            setColorTag(styles.design) 
            seMiniNameTag('DES')
            break;   
          case 'professional':
            setColorTag(styles.professional) 
            seMiniNameTag('PROF')
            break;    
          default:
            setColorTag(styles.tutorial) 
            seMiniNameTag('TUT')
            break;
        }
      },[])
  return (
    <div key={tag} className={`${styles.tacks} ${colorTag} ${isFirstTag && styles.firstTag}`}>{miniNameTag}</div>
  )
}

export default MiniTag