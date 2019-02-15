import React from 'react'
import Router from './Router'
import Header from './modules/Header'
import './styles/index.css';

import Store from "./config/store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faHeart, faTag)

export default function App() {

  return (
        <div className="page-container">
            <Header/>

          <p></p>

            <Router/>


            
        </div>

    )
}
