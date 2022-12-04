import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './components/home/Home'
import Product from './components/product/Product'
import Cart from './components/cart/Cart'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="/product/:id" element={<Product />} />
          </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
    
  </QueryClientProvider>
 
)
