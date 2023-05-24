import Navigation from '../Navigation/Navigation';
import footerStyles from './footer.module.css';
import Link from "next/link"
export default function Footer({data}) {
    return (
        <div className={footerStyles.container}>
           Footer
           <ul>
           { data?.map(link => <li key={link.title}>
                <Link href={link.path}>{link.title}</Link>
            </li>)}
           </ul>
        </div>
    )
  }