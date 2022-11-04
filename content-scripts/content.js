function VideoOperate() {
    // 删除次数
    this.deleteCount = 1
    // 视频总数
    this.videosLength = 0
    this.currVideosLength = 0
    this.oldVideosLength = 0
    // 延时器
    this.confirmTimer = null
    this.deleteTimer = null

    this.deleteInterval = null
    this.deleteWindow = null

    // 删除开关
    this.deleteSwitch = false
}

VideoOperate.prototype.deleteVideos = function () {
    if (!this.deleteSwitch) {
        return
    }
    console.log('开始执行第', this.deleteCount, '次删除')
    const self = this
    // 拿到所有视频的三个点的元素
    let moreMemuLinks = document.querySelectorAll('.activate-dd')
    this.videosLength = moreMemuLinks.length

    if (this.videosLength.length > 0) {
        // 取第一个视频的三个点的元素
        let moreLink = moreMemuLinks[0]
        if (moreLink instanceof HTMLElement) {
            // 点击三个点
            moreLink.click()
            // 拿到点击三个点后出现的Delete控件
            let deleteEl = document.getElementById('delete')
            if (deleteEl && deleteEl instanceof HTMLElement) {
                // 点击Delete
                deleteEl.click()
                // 清除延时器
                if (this.confirmTimer != null) {
                    clearTimeout(this.confirmTimer)
                }
                // 重新设置延时器
                this.confirmTimer = setTimeout(() => {
                    // 拿到确认按钮
                    let confirmBtn = document.getElementsByClassName('buttons')[0].firstChild
                    if (confirmBtn && confirmBtn instanceof HTMLElement) {
                        // 点击确认按钮
                        confirmBtn.click()
                        if (self.deleteTimer != null) {
                            clearTimeout(self.deleteTimer)
                        }
                        // 点击确认之后，等待1秒检测是否开始删除（删除弹窗是否已经出现）
                        self.deleteTimer = setTimeout(() => {
                            // todo 要以2秒为单位判断是否删除的窗口已经消失，消失就说明已经删除完成，可以执行下一次删除
                            if (self.deleteInterval) {
                                clearInterval(self.deleteInterval)
                            }
                            // 2秒为单位持续检测删除中的弹窗是否存在，存在就继续等待
                            self.deleteInterval = setInterval(function () {
                                self.deleteWindow = document.getElementById('')
                                if (self.deleteWindow == null || self.deleteWindow == undefined) {
                                    clearInterval(self.deleteInterval)
                                    self.deleteVideos()
                                    self.deleteCount += 1
                                }
                            }, 2000)
                        }, 1000)
                    }
                }, 2000)
            }
        }
    } else {
        // todo 清除定时器等
    }
}

VideoOperate.prototype.start = function () {
    console.log('删除即将开始。。。。。')
    this.deleteSwitch = true
    this.deleteVideos()
}

VideoOperate.prototype.stop = function () {
    console.log('停止删除。。。。。')
    this.deleteSwitch = false
}


const vd = new VideoOperate()

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('onMessage: ', request)
    console.log('onMessage: ', sender)
    console.log('onMessage: ', sendResponse)
    if(request.isStart != undefined && request.isStart){
        vd.start()
    }

    if(request.isStart != undefined && !request.isStart){
        vd.stop()
    }
});