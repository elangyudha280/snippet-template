
// import buttom getstarted
import ButtonStarted from './buttonStarted.jsx'


// functional component jumbotron
const Jumbotron = ()=>{
    return(
        <section className="jumbotron">
            <div className="container">
                <h3 className="title-jumbotron">
                    gorgeous code snippets
                </h3>
                <p className="desc-jumbotron">
                    with snipper, create fully customizable code snippets in a matter of seconds right from your browser.
                </p>
                <div className="container-btn">
                <ButtonStarted idButton="btn-jumbotron"/>
                </div>
                <p className="footer-text-jumbotron mt-3">
                    No credit card required.
                </p>
            <img src="Assets/SnippetImage.png" alt="" className="snipped-jumbotron" />
                
            </div>
        </section>
        )
}

export default Jumbotron;