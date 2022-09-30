const util = require('../utils/util.js')


function reddenPage() {
    document.body.style.textShadow = '0 0 1px #000000';
    document.body.style.fontFamily = 'MiSans';

    util.setStyle('a', 'text-shadow', 'none')
    util.setStyle('h1', 'text-shadow', 'none')
    util.setStyle('h2', 'text-shadow', 'none')
    util.setStyle('h3', 'text-shadow', 'none')
    util.setStyle('h4', 'text-shadow', 'none')
    util.setStyle('h5', 'text-shadow', 'none')
    util.setStyle('h6', 'text-shadow', 'none')

    util.setStyle('code', 'color', '#00d07d')
    util.setStyle('code', 'text-shadow', '0 0 1px #00d07d')
}

reddenPage()