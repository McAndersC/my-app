
import footerStyles from './footer.module.css';
import Link from "next/link"
export default function Footer({navData}) {
    return (
        <div className={footerStyles.container}>
           Footer
           <ul>
           { navData?.map(linkItem => <li key={linkItem.title}>
                <Link href={linkItem.path}>{linkItem.title}</Link>
            </li>)}
           </ul>
        </div>
    )
  }