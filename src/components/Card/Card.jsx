import { useState } from 'react';
import style from './Card.module.scss';

export default function Card({
    imageUrl,
    name,
    price,
    id,
    onAddToCart,
    onAddFavorites,
    Favorite = false,
}) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFaforite, setIsFavorite] = useState(Favorite);

    const addToCart = () => {
        onAddToCart({ name, price, imageUrl });
        setIsAdded(!isAdded);
    };

    const addToFavorite = () => {
        onAddFavorites({ name, price, imageUrl, id });
        setIsFavorite(!isFaforite);
    };

    return (
        <div className={style.card}>
            <button
                className={
                    isFaforite
                        ? `${style.cardBtnFavorite}  ${style.cardBtnFavoriteActive}`
                        : style.cardBtnFavorite
                }
                onClick={addToFavorite}
            >
                <img
                    className={style.cardPhotoFavorite}
                    src={
                        isFaforite
                            ? '/img/favorite-active.png'
                            : '/img/favorite.png'
                    }
                    alt='like'
                />
            </button>
            <img className={style.cardPhoto} src={imageUrl} alt='sneakers' />
            <p className={style.cardName}>{name}</p>
            <div className={style.cardBottom}>
                <div className={style.price}>
                    <p className={style.priceName}>Цена:</p>
                    <p className={style.priceValue}>{price}</p>
                </div>
                <button
                    onClick={addToCart}
                    className={isAdded ? style.priceBtnActive : style.priceBtn}
                >
                    <img
                        className={style.priceBtnPhoto}
                        src={
                            isAdded
                                ? '/img/plus-btn-active.svg'
                                : '/img/plus-btn.svg'
                        }
                        alt='plus'
                    />
                </button>
            </div>
        </div>
    );
}
