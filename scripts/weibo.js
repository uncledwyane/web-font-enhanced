function reddenPage() {
    document.body.style.textShadow = '0 0 #000000';
    document.body.style.fontFamily = 'MiSans';

    setStyle('a', 'text-shadow', 'none')
    setStyle('h1', 'text-shadow', 'none')
    setStyle('h2', 'text-shadow', 'none')
    setStyle('h3', 'text-shadow', 'none')
    setStyle('h4', 'text-shadow', 'none')
    setStyle('h5', 'text-shadow', 'none')
    setStyle('h6', 'text-shadow', 'none')

    setStyle('code', 'color', '#00d07d')
    setStyle('code', 'text-shadow', '0 0 #00d07d')
}

function setStyle(elementTag, property, value) {
    // 通过传过来的元素名
    let elementsByTag = document.getElementsByTagName(elementTag)
    if(elementsByTag.length > 0){
        for(var i = 0; i < elementsByTag.length; i++){
            let element = elementsByTag.item(i)
            element.style.setProperty(property, value)
        }
    }
}

reddenPage()