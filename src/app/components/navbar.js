import styles from "../page.module.css";
import Image from "next/image";
import Link from 'next/link';



export default function navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navSubcontainer}>
      {/* <Link href="/"> */}
            <div className={styles.navSubcontainer}>
                <Image 
                  src="/cl_logo.png"
                  width={25}
                  height={25}
                />
              <h1 className={styles.title}>Creative Labs</h1>
            </div>
          {/* </Link> */}
      </div>
      <h1 className={styles.siteLinkTitle}>
        <a href="https://www.instagram.com/creativelabsusc/" target="_blank">Club Website</a>
      </h1>
    </div>
  );
}