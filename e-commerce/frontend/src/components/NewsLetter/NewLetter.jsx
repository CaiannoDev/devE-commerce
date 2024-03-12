import '../NewsLetter/NewsLetter.css'

function NewsLetter(){
    return (
        <div className='newsLetter'>
            <h1>Get Exclusive Offers on your Email</h1>
            <p>subscribe to our newsletter and stay updated</p>
            <div className='info-newsletter'>
                <input  id="div-input" type="email" placeholder='Your email id'/>
                <button id="div-btn">Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;