'use client'
import Link from "next/link"
import styles from "./navigation.module.css"
import { Oswald, JetBrains_Mono } from 'next/font/google';
import { useState } from "react";

 
const oswaldFont = Oswald({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Navigation({data, show}) {
   
  const [showPane, setShowPane] = useState(false)

  return (
    
      <div className={styles.container}>

          <h1 className={oswaldFont.className}>TOP NAVIGATION</h1>

          { data?.map(link => <Link key={link.title} href={link.path}>{link.title}</Link>)}

          {<div className={styles.burger} onClick={() => setShowPane(!showPane)}>
              showPane er lig med {showPane.toString()}
          </div>}
        
          {showPane ? 
          <div className={styles.pane} >
              {
                data?.map(link => <Link key={link.title} href={link.path}>{link.title}</Link>)
              }
          </div>
          : ''}
      </div>
  )
}
