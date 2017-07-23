require("./src/js/content.js")

import _ from 'lodash'
import printMe from './src/js/print'
import Love from './love.jpg'

function component () {
    var element = document.createElement('div')
    var btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ')
    element.classList.add('hello-box')
    var img = document.createElement('img')
    img.src = Love
   
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe
    element.appendChild(btn)
    
    return element
}

document.body.appendChild(component())