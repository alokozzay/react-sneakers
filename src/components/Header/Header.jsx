import stl from './Header.module.scss';

import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className='d-flex justify-between'>
            <Link to='/'>
                <div className='d-flex align-center'>
                    <img
                        className={stl.headerLeftLogo}
                        src='/img/logo.png'
                        alt='logo'
                    />
                    <div className={stl.headerLeftName}>
                        <h3 className={stl.headerLeftTitle}>React sneakers</h3>
                        <p className={stl.headerLeftSubtitle}>
                            магазин лучших кросовок
                        </p>
                    </div>
                </div>
            </Link>
            <ul className={stl.headerRight}>
                <li className='mr-30 cu-p' onClick={props.openingCart}>
                    <img src='/img/cart.svg' alt='cart' />{' '}
                    <span>1250 грн.</span>
                </li>
                <Link to='/favorites'>
                    <li className='mr-30 cu-p'>
                        <img src='/img/like.svg' alt='like' />
                    </li>
                </Link>
                <li className='cu-p'>
                    <img src='/img/user.svg' alt='user' />
                </li>
            </ul>
        </header>
    );
}
