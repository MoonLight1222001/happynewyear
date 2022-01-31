
const startPage = document.querySelector('#start-page')
const homePage = document.querySelector('.homePage')
const userInput = document.querySelector('input[name="name"]')
const logBtn = document.querySelector('.log-btn')
const mainUser = document.querySelector('#main__user')
const couplet = document.querySelector('.main__couplet')
const errorLog = document.querySelector('.input__error')
const getLuckyMoneyBtn = document.querySelector('.lucky_money')
const modal = document.querySelector('.modal')
const notice = document.querySelector('.notice')
const confirmBtn = document.querySelector('.notice__btn button')
const noticeVideo = document.querySelector('.notice__content-video')
const audio = document.querySelector('audio')
console.log(audio)
const couplets = [
    'Năm Nhâm Dần – Chúc bạn luôn: Đong cho đầy hạnh phúc – Gói cho trọn lộc tài – Giữ cho mãi an khang – Thắt cho chặt phú quý',
    'Chúc mừng năm mới Nhâm Dần 2022. Chúc năm mới sức khỏe dẻo dai, công việc thuận lợi thăng tiến dài dài, phi những nước đại tiến tới thành công.',
    'Xuân này hơn hẳn mấy xuân qua. Phúc lộc đưa nhau đến từng nhà. Vài lời cung chúc tân niên mới. Vạn sự an khang vạn sự lành.',
    'Hoa đào nở, chim én về, mùa xuân lại đến. Chúc một năm mới: nghìn sự như ý, vạn sự như mơ, triệu sự bất ngờ, tỷ lần hạnh phúc.',
    'Năm hết tết đến kính chúc bạn thật nhiều sức khoẻ, miệng cười vui vẻ, tiền vào mạnh mẽ, cái gì cũng được suôn sẻ, để sống tiếp một cuộc đời thật là đẹp đẽ.'
]

const randomCouplet = couplets[Math.floor(Math.random() * couplets.length)]


const logIn = () => {
    startPage.style.display = 'none'
    homePage.style.display = 'block'
    const userName = userInput.value
    mainUser.innerHTML = `${userName}` 
    couplet.innerHTML = `${randomCouplet}`
    audio.play()
}

couplet.innerHTML = `${randomCouplet}`


userInput.onkeypress = (e) => {
    logBtn.style.display = 'block'
    errorLog.style.display = 'none'
    if (e.keyCode == 13) {
        logIn()
     } 
}

logBtn.onclick = () => {
    if(userInput.value.trim().length === 0) {
        errorLog.style.display = 'block'
        logBtn.style.display = 'none'
        return
    }
    logIn()
}

getLuckyMoneyBtn.onclick = () => {
    modal.style.display = 'block'
    notice.style.display = 'block'
}


confirmBtn.onclick = () => {
    modal.style.display = 'none'
    notice.style.display = 'none'
}





