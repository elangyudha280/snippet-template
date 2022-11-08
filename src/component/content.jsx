

import react,{Component} from 'react'

import ButtonStarted from './buttonStarted.jsx'


// functional component content left item content
const ContentLeft = ()=>{
    return (
        <div className="item-content content-left">
           <h2 className="title-content">
               A fully customizable code snippet editor
           </h2>
           <p className="desc-content">
               Fully costumize the color scheme of your code snippet, or use our own premade color schemes. Export your code snippets in JPG,PDF,PNG, or any of the other 10+ common extensions.
           </p>
           <ButtonStarted idButton="btn-content"/>
        </div>
    )
}

// functional component content right item content
const ContentRight  = ()=>{
    return(
        <div className="item-content content-right">
            <img src="Assets/CustomizableImage.png" alt="" className="img-content" />
        </div>
    )
}

class MainContent extends Component{


    render(){
        return (
            <section className="main-content container">
             <ContentLeft/>
             <ContentRight/>
            </section>
        )
    }

}

export default MainContent;