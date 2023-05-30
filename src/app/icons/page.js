import { FaBeer, FaAlgolia, FaAngry } from "react-icons/fa";
import styles from './styles.module.css'

export default function Icons() {
    return (
        <div>

            <h1>Icons</h1>
            <div className={styles.icon}> 
            <FaBeer />
            <FaAlgolia />
            <FaAngry />
            
            </div>

        </div>
    )
  }
  