import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-z9n1h1ob.us.auth0.com
// l9OsnwgmdcslKvgpJHSHMOCz3zb9TYrW
ReactDOM.render(
    <Auth0Provider  
    domain="dev-z9n1h1ob.us.auth0.com"
    clientId="l9OsnwgmdcslKvgpJHSHMOCz3zb9TYrW"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'>
   <UserProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>
    </Auth0Provider>,
    
    
    document.getElementById('root')

)
