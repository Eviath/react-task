import React from 'react'
import Router from './Router'
import Header from './modules/Header'
import Slider from './modules/Slider'
import './styles/index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faHeart, faTag)

export default function App() {
    return (
        <div className="page-container">
            <Header/>

      

            <Router/>


            
        </div>

    )
}
