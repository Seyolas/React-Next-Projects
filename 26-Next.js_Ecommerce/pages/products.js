
import Axios from "axios";
import { useState } from "react";


export const getStaticProps = async ()=>{
    try {
        const res = await Axios.get("https://fakestoreapi.com/products");
        return {
           props:{data:res.data}
        }
    
    } catch (error) {
        return error
    }
   
}
const products = ({data}) => {
    const [products,setProducts] = useState(data);
    const [categories,setCategories] = useState([]);
    const [price,setPrice] = useState(900.00);
    const prices = products.map((i)=>i.price);
    const max_price = Math.max(...prices);
    const min_price = Math.min(...prices);

    // Filter categories and fix men,woman sentences
   let newCategories = products.map((i)=>i.category);
   newCategories = Array.from(new Set(['All',...newCategories]));

   let indexMan = newCategories.indexOf("men's clothing");
    if (indexMan !== -1) {
        newCategories[indexMan] = 'men';
    }

    let indexWoman = newCategories.indexOf("women's clothing");
    if (indexWoman!==-1) {
        newCategories[indexWoman] = 'women';
    }

    const updateFilters = (e)=>{
        
        console.log(e.target.value);
        setPrice(e.target.value);

    }

    return (
        <section>

        <aside className="aside-category">
            <div className="items">
            <h4>Category</h4>

            {newCategories.map((i,index)=><button key={index}>{i}</button>)}
            </div>
        </aside>


        <aside className="aside-price">
            <p>Price</p>
            <p>$ {price}</p>
        <input type="range" name='price' value={price} 
        onChange={updateFilters} min={min_price} max={max_price} />

        </aside>


        <style jsx>{`
            section{
                width:90vw;
                margin:1rem auto;
            }
            
            .aside-category {
                display:flex;
                flex-direction:column;
                background-color:#fff;
                width:max-content;
                margin-left:3rem;
            }
            .aside-category h4{
                border-bottom: 1px solid #eaeaea;

            }
            .aside-category .items{
                display:flex;
                flex-direction:column;
                justify-content:flex-start;
                padding-top:1rem;
                padding-bottom:1rem;
                padding-right:4rem;
                padding-left:1rem;
            }
            .aside-category .items button  {
                width:fit-content;
                background-color:#fff;
                margin:0.5rem 0;
                border:none;
                transition:0.3s all;
                cursor:pointer;

            }
            .aside-category .items button:hover{
                color:red;
            }

            
            `}

        </style>
        </section>

    )
}

export default products
