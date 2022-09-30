const util = {
    setStyle: function (elementTag, property, value) {
        // 通过传过来的元素名
        let elementsByTag = document.getElementsByTagName(elementTag)
        if(elementsByTag.length > 0){
            for(var i = 0; i < elementsByTag.length; i++){
                let element = elementsByTag.item(i)
                element.style.setProperty(property, value)
            }
        }
    }   
}


export default util