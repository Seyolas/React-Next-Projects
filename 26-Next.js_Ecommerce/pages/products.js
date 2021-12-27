
import Axios from "axios";
import {  useEffect, useState } from "react";
import Link from 'next/link';
import { formatPrice } from "../components/utils/helpers";

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
    const [price,setPrice] = useState(900.00);
    const [sort,setSort] = useState();
    const prices = products.map((i)=>i.price);
    const max_price = Math.max(...prices);
    const min_price = Math.min(...prices);

  
    // Filter categories and fix men,woman sentences
   let newCategories = data.map((i)=>i.category);
   newCategories = Array.from(new Set(['All',...newCategories]));

   let indexMan = newCategories.indexOf("men's clothing");
    if (indexMan !== -1) {
        newCategories[indexMan] = 'men';
    }

    let indexWoman = newCategories.indexOf("women's clothing");
    if (indexWoman!==-1) {
        newCategories[indexWoman] = 'women';
    }

    const updatePrice = (e)=>{
       
        let value = e.target.value;
        setPrice(value);
        let filtered_price = data.filter((i)=>i.price<price);
        setProducts(filtered_price)

        
    }
    const updateSort = (e)=>{
        e.preventDefault();
       

        let sortValue = e.target.value;
        console.log(sortValue);
        let filtered_products= [...products];

        let temp = [...filtered_products];

          if (sortValue === 'price-lowest') {
            temp = temp.sort((a,b)=>a.price-b.price)

          }
          if (sortValue === 'price-highest') {
            temp = temp.sort((a,b)=>b.price-a.price)

          }
          if (sortValue === 'name-a') {
           temp = temp.sort((a,b)=>a.title.localeCompare(b.title))

          }
         if (sortValue === 'name-z') {
           temp = temp.sort((a,b)=>b.title.localeCompare(a.title))

          }
          setProducts(temp)

    }
    const updateCategory = (e)=>{

      
        let value = e.target.textContent;

        if (value === 'All') {
            const filtered_category  = data.map((i)=>i)
            setProducts(filtered_category);
        }

        if (value === 'men') {
            const filtered_category  = data.filter((i)=>i.category === "men's clothing")
            setProducts(filtered_category);
        }
      
        if (value === 'jewelery') {
            const filtered_category  = data.filter((i)=>i.category === 'jewelery')
            setProducts(filtered_category);
        }
        if (value === 'electronics') {
            const filtered_category  = data.filter((i)=>i.category === 'electronics')
            setProducts(filtered_category);
        }
        if (value === 'women') {
            const filtered_category  = data.filter((i)=>i.category == "women's clothing")
            setProducts(filtered_category);
        }
       

    }

    return (
        <section>
            <div>

        <aside className="aside-category">
            <div className="items">
            <h4>Category</h4>
            {newCategories.map((i,index)=><button onClick={updateCategory} key={index}>{i}</button>)}
            </div>
        </aside>


        <aside className="aside-price">
            <p>Price</p>
            <p>$ {price}</p>
        <input type="range" name='price' value={price} 
        onChange={updatePrice} min={min_price} max={max_price} />
        </aside>
        </div>

        <div>

        <form>
        <label htmlFor="sort">sort by</label>
            <select name="sort" id="sort" className='sort-input'  onChange={updateSort}>
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a-z)</option>
            <option value="name-z">name (z-a)</option>
            </select>
        </form>

        <main className="products">
        {products.map((i,index)=>{
            const {id,title,price,image} = i;
            return (
                <Link key={index}  href={`/product/${id}`}><a className="item">
                <img className="product-image" src={image} alt="" />
                <p className="title">{title}</p>
                <p className="price">{formatPrice(price)}</p>
                </a>
                </Link>
              
            )
           
        })}

        </main>
        </div>

        <style jsx>{`
            section{
                width:90vw;
                margin:1rem auto;
                display:flex;
            }
            
            .aside-category {
                display:flex;
                flex-direction:column;
                background-color:#fff;
                width:160px;
                height:210px;
                margin-left:3rem;
            }
            .aside-category h4{
                border-bottom: 1px solid #eaeaea;

            }
            .aside-price{
                display:flex;
                flex-direction:column;
                background-color:#fff;
                width:max-content;
                margin-left:3rem;
                margin-top:1rem;
            }
            .aside-price input{
                display:flex;
                flex-direction:column;
                justify-content:flex-start;
                padding-top:1rem;
                padding-bottom:1rem;
                padding-left:1rem;
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
            .products{
                display:grid;
                grid-template-columns: repeat(3,1fr);
                grid-auto-rows: minmax(150px,300px);
                margin:1rem ;
                grid-gap:2rem;
                
            }
            .item{
                background-color:#fff;
                border: 1px solid #eaeaea;
                cursor:pointer;
                transition: all 0.3s;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                padding-bottom:1rem;
                color:black;
            }
            .item:hover{
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
            .title{
                text-align:center;

            }
            .product-image{
                width:100px;
            }
            .price{
                font-weight:bold;
            }

            
            `}

        </style>
        </section>

    )
}

export default products
