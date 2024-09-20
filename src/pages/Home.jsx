import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import Product from "../components/Product";

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOnline, setIsOnline] = useState(navigator.onLine); // Check initial network status

    // Function to fetch products
    async function fetchProducts() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.log("some error happened in API fetching");
            setPosts([]);
        }
        setLoading(false);
    }

    // Update network status
    useEffect(() => {
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));

        return () => {
            window.removeEventListener('online', () => setIsOnline(true));
            window.removeEventListener('offline', () => setIsOnline(false));
        };
    }, []);

    // Fetch products on component mount
    useEffect(() => {
        if (isOnline) {
            fetchProducts();
        }
    }, [isOnline]);

    return (
        <div className=" min-h-screen flex items-center justify-center bg-gray-100 p-4">
            {
                loading ? <Spinner /> :
                    posts.length > 0 ?
                        (
                            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                                {
                                    posts.map((post) =>
                                        (<Product key={post.id} post={post} />))
                                }
                            </div>
                        ) :
                        (
                            <div className="text-center">
                                {
                                    isOnline ?
                                        <p className="text-xl font-semibold text-gray-700">No data found</p> :
                                        <div>
                                            <h2 className="text-2xl font-semibold text-gray-700">No Internet Connection</h2>
                                            <p className="text-lg text-gray-500">Please check your connection and try again.</p>
                                        </div>
                                }
                            </div>
                        )
            }
        </div>
    )
};

export default Home;

