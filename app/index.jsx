import React from 'react'
import { render } from 'react-dom'

import {hashHistory} from 'react-router'

import RouterMap from './router/RouterMap'

import './static/css/common.less'
//引用redux例子
//import  fn from './containers/redux-demo/redux-demo.js'
//fn()


render(
        <RouterMap history={hashHistory}/>,
    document.getElementById('root')
)
