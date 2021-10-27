import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>

    <Head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta name="keywords" content="ninjas" />
       <title> Ninja List | Home</title>
    </Head>

    <div className={styles.container}>
  
      <h1>HomePage</h1> 
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eligendi dicta animi molestias rerum qui.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eligendi dicta animi molestias rerum qui.</p>
      <Link href='/ninjas'>See ninjas listing</Link>
     
    </div>

    </>
  )
}
