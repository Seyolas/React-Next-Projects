import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';
export const getStaticProps = async ()=>{

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {data}
    }
}


const index = ({data}) => {
    return (
    <div>
        <h1>All ninjas</h1>
       {data.map((i)=>{
           return <Link href={`/ninjas/${i.id}`} key={i.id} ><h3 className={styles.single}>{i.name}</h3></Link>
       })}
    </div>
    
    );
}
 
export default index;