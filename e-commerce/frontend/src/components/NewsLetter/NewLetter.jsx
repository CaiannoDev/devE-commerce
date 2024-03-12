import '../NewsLetter/NewsLetter.css'

function NewsLetter(){
    return (
        <div className='newsLetter'>
            <h1>Receba ofertas e novidades por e-mail</h1>
            <p>Cadastre-se em nossa newsletter e fique atualizado</p>
            <div className='info-newsletter'>
                <input  id="div-input" type="email" placeholder='digite seu email'/>
                <button id="div-btn">Cadastrar</button>
            </div>
        </div>
    )
}

export default NewsLetter;