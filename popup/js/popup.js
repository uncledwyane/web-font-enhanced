const testBtn = document.getElementById('testBtn');


testBtn.onclick = function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                url: chrome.extension.getURL("images/stars.jpeg"),
                imageDivId: `${guidGenerator()}`,
                tabId: tabs[0].id
            },
            function(response) {
                console.log('tabs: ', response)
                console.log('guidGenerator: ', guidGenerator())
            }
        );
        function guidGenerator() {
            const S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }
    })
}