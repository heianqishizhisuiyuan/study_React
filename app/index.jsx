import React from 'react'
import { render } from 'react-dom'

import {hashHistory} from 'react-router'

import RouterMap from './router/RouterMap'

import './static/css/common.less'




render(
        <RouterMap />,
    document.getElementById('root')
)
