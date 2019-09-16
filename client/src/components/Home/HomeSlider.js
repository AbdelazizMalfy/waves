import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/MyButton';


const HomeSlider = (props) => {

    const slides = [
        {
            img:'/images/featured/featured_home.jpg',
            title:'Fender',
            subtitle:'Custom shop',
            linkTitle:'Shop Now',
            linkTo:'/shop'
        },
        {
            img:'/images/featured/featured_home_2.jpg',
            title:'B-stock',
            subtitle:'Awesome discounts',
            linkTitle:'View offers',
            linkTo:'/shop'
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll:1,
        arrows:false
    }

    const generateSlides = () => (
        slides ? 
            slides.map((item,i) => (
                <div key={i} >
                    <div className='featured_image'
                        style={{
                            background:`url(${item.img})`,
                            height:`${window.innerHeight}px`
                        }}
                    >
                        <div className='featured_action'>
                            <div className='tag title'>{item.title}</div>
                            <div className='tag low_title'>{item.subtitle}</div>
                            <div>
                                <MyButton 
                                    type='default'
                                    title={item.linkTitle}
                                    linkTo={item.linkTo}
                                    addStyles={{
                                        margin: '10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            ))
        :null
    )
    return (
        <div className='featured_container'>
            <Slider {...settings} >
                { generateSlides() }
            </Slider>
            
        </div>
    )
}

export default HomeSlider;
