import Link from "next/link"
import styles from "./navigation.module.css"

export default function Navigation() {

    const navdata = [
        {
            "title": "Home",
            "path": "/"
        },
        {
            "title": "Contacts",
            "path": "/contacts"
        },
        {
            "title": "Layout",
            "path": "/layout"
        }
    ]

    return (
        <div className={styles.container}>
            <h1>TOP NAVIGATION</h1>
            { navdata.map(link => <Link key={link.title} href={link.path}>{link.title}</Link>)}
            
        </div>
    )
  }
