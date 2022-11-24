import Card from '../components/Card/Card';

export default function Home({
    search,
    onSearchChange,
    items,
    onAddToCart,
    onAddFavorites,
}) {
    return (
        <div className='product'>
            <div className='d-flex align-center justify-between mb-40'>
                <h1 className='title'>Все кроссовки</h1>
                <div className='search-block'>
                    <img
                        src='/img/search.svg'
                        alt='Search'
                        className='search-icon'
                    />
                    <input
                        type='text'
                        placeholder='Поиск...'
                        className='search'
                        value={search}
                        onChange={onSearchChange}
                    />
                </div>
            </div>
            <div className='productItems'>
                {items
                    .filter((item) =>
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((obj, index) => (
                        <Card
                            key={obj.id}
                            name={obj.name}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            onAddToCart={onAddToCart}
                            onAddFavorites={onAddFavorites}
                        />
                    ))}
            </div>
        </div>
    );
}
