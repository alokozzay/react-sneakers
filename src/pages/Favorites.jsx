import Card from '../components/Card/Card';

export default function Favorites({ items, onAddToCart, onAddFavorites }) {
    return (
        <div className='product'>
            <h1 className='title mb-40'>Закладки</h1>
            <div className='productItems'>
                {items.map((obj) => (
                    <Card
                        key={obj.id}
                        onAddToCart={onAddToCart}
                        Favorite={true}
                        onAddFavorites={onAddFavorites}
                        {...obj}
                    />
                ))}
            </div>
        </div>
    );
}
