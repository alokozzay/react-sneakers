import stl from './Drawer.module.scss';

export default function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className={stl.overlay}>
            <div className={stl.drawer}>
                <div className={stl.drawerTitle}>
                    Корзина
                    <button className={stl.crossBtn} onClick={onClose}>
                        <img
                            className={stl.cross}
                            src='/img/plus-btn.svg'
                            alt='remove'
                        />
                    </button>
                </div>

                {items.length > 0 ? (
                    <div className={stl.drawerFlex}>
                        <div className={stl.cartItems}>
                            {items.map((obj) => (
                                <div className={stl.cartItem}>
                                    <img
                                        src={obj.imageUrl}
                                        alt='sneakers'
                                        className={stl.cartItemPhoto}
                                    />
                                    <div className={stl.cartItemInfo}>
                                        <div className={stl.cartItemTitle}>
                                            {obj.name}
                                        </div>
                                        <p className={stl.cartItemPrice}>
                                            {obj.price}
                                        </p>
                                    </div>
                                    <button
                                        className={stl.crossBtn}
                                        onClick={() => onRemove(obj.id)}
                                    >
                                        <img
                                            className={stl.cross}
                                            src='/img/plus-btn.svg'
                                            alt='remove'
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className={stl.itemTotalInfo}>
                            <ul className={stl.listTotal}>
                                <li className={stl.itemTotal}>
                                    <p className={stl.itemTitle}>Итого:</p>
                                    <div className={stl.circle}></div>
                                    <p className={stl.itemValue}>
                                        21 498 руб.{' '}
                                    </p>
                                </li>
                                <li className={stl.itemTotal}>
                                    <p className={stl.itemTitle}>Налог 5%:</p>
                                    <div className={stl.circle}></div>
                                    <p className={stl.itemValue}>1074 руб.</p>
                                </li>
                            </ul>
                            <button className={stl.checkout}>
                                Оформить заказ
                                <img
                                    src='/img/str.svg'
                                    alt='arrow'
                                    className={stl.arrow}
                                />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={stl.cartNullItem}>
                        <img
                            src='/img/cart-null.png'
                            alt='cart-null!'
                            className='cartNull'
                        />
                        <p className={stl.cartNullTitle}>Корзина пустая</p>
                        <p className={stl.cartNullSubtitle}>
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать
                            заказ.
                        </p>
                        <button className={stl.checkout} onClick={onClose}>
                            Вернуться назад
                            <img
                                src='/img/str.svg'
                                alt='arrow'
                                className={stl.arrowNull}
                            />
                        </button>
                    </div>
                )}

                {/* {items.length > 0 && (
                    
                )} */}
            </div>
        </div>
    );
}
