import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoritesItems, setFavoritesItems] = useState([]);
    const [stateCart, setStateCart] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('https://63656a8b046eddf1baed8354.mockapi.io/items')
            .then((res) => {
                setItems(res.data);
            });
        axios
            .get('https://63656a8b046eddf1baed8354.mockapi.io/cart')
            .then((res) => {
                setCartItems(res.data);
            });
        axios
            .get('https://63656a8b046eddf1baed8354.mockapi.io/favorites')
            .then((res) => {
                setFavoritesItems(res.data);
            });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://63656a8b046eddf1baed8354.mockapi.io/cart', obj);
        setCartItems([...cartItems, obj]);
    };
    const onAddFavorites = async (obj) => {
        if (favoritesItems.find((item) => item.id === obj.id)) {
            axios.delete(
                `https://63656a8b046eddf1baed8354.mockapi.io/favorites/${obj.id}`
            );
            setFavoritesItems((prev) =>
                prev.filter((item) => item.id !== obj.id)
            );
        } else {
            const { data } = await axios.post(
                'https://63656a8b046eddf1baed8354.mockapi.io/favorites',
                obj
            );
            // console.log(data);
            setFavoritesItems((prev) => [...prev, data]);
        }
    };

    const onRemoveToCart = (id) => {
        axios.delete(`https://63656a8b046eddf1baed8354.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onSearchChange = (event) => {
        setSearch(event.target.value);
        // console.log(event.target.value);
    };

    return (
        <div className='wrapper'>
            {stateCart && (
                <Drawer
                    onRemove={onRemoveToCart}
                    items={cartItems}
                    onClose={() => setStateCart(false)}
                />
            )}

            <Header openingCart={() => setStateCart(true)} />

            <Routes>
                <Route
                    path='/'
                    element={
                        <Home
                            search={search}
                            onSearchChange={onSearchChange}
                            items={items}
                            onAddToCart={onAddToCart}
                            onAddFavorites={onAddFavorites}
                        />
                    }
                />
                <Route
                    path='/favorites'
                    element={
                        <Favorites
                            items={favoritesItems}
                            onAddToCart={onAddToCart}
                            onAddFavorites={onAddFavorites}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
