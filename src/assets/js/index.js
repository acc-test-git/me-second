
(() => {
    const iframe = document.querySelector('.about-video iframe')
    const videoWrap = document.querySelector('.about-videos')
    const videoHome = document.querySelector('.about-video')
    videoHome.addEventListener('click', function() {
            if(this.classList.contains('poster')) {
                this.classList.remove('poster')
                return
            }
    })
    videoWrap.addEventListener('click', function(e) {
        if(!e.target.closest('img')) return
    
        if(videoHome.classList.contains('poster')) {
            videoHome.classList.remove('poster')
        }
        let iframeSrc = iframe.getAttribute('src')
        let videoSrc = e.target.getAttribute('data-videoSrc')
    
        for(let i = 0; i < this.children.length; i++) {
            if(this.children[i].classList.contains('video-wrap--active')){
                this.children[i].classList.remove('video-wrap--active')
                break;
            }
        }
        let urlVideo = iframeSrc.replace(/[a-zA-Z0-9-.]*$/, videoSrc)
        iframe.setAttribute('src', urlVideo)
        e.target.classList.add('video-wrap--active')
    })
})()