import React from 'react';
import MyButton from '../utils/MyButton';

const HomePromotion = () => {
    
    const promotion = {
        img:'/images/featured/featured_home_3.jpg',
        title:'Up to 40%',
        subtitle:'In second hand guitars',
        linkTitle:'Shop Now',
        linkTo:'/shop'
    }

    const renderPromotion = () => (
        promotion ?
        <div className="home_promotion_img"
            style={{
                background:`url(${promotion.img})`,
            }}
        >
                <div className="tag title">{promotion.title}</div>
                <div className="tag low_title">{promotion.subtitle}</div>
                <div className="my_link">
                    <MyButton
                        type="default"
                        title={promotion.linkTitle}
                        linkTo={promotion.linkTo}
                        addStyles={{
                            margin: '10px 0 0 0',
                        }}
                    />
                </div>
        </div>
        :null

    )


    return (
        <div className="home_promotion">
            {renderPromotion()}
        </div>
    )
}

export default HomePromotion;
