import React, { Component } from 'react'

class ProdImg extends Component {
    
    state = {
        lightbox: false,
        imagePos:0,
        lightboxImages:[]
    }

    componentDidMount(){
        if(this.props.details.images.length > 0){
            let lightboxImages = [];

            this.props.details.images.forEach(image => {
                lightboxImages.push(image.url)
            })

            this.setState({
                lightboxImages 
            })
        }     
    }

    renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url
        }else {
            return `/images/image_not_availble.png`
        }
    }


    showThumbs = () => (
        this.state.lightboxImages.map((image,i) =>(
            i > 0 ? 
            <div 
                key={i} 
                onClick={()=> this.handleLightBox(i)}
                className='thumb'
                style={{background: `url(${image}) no-repeat`}}
            >
            </div>

            : null
        ))
    )


    handleLightBox = (position) => {
        console.log('lightBox clicked')
    }

    render() {
        const { details } = this.props;
        return (
            <div className='product_image_container'>
                <div className='main_pic'>
                    <div
                        style={{background:`url(${this.renderCardImage(details.images)}) no-repeat`}} 
                        onClick={()=> this.handleLightBox(0)}
                    >
                    </div>
                </div>
                <div className='main_thumbs'>
                    {this.showThumbs(details)}
                </div>
            </div>
        )
    }
}
export default ProdImg;