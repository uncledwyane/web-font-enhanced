const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');


startBtn.onclick = function (){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                isStart: true
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

stopBtn.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                isStart: false
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