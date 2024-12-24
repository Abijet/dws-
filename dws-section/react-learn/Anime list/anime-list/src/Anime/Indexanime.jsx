import React, { useEffect, useState } from 'react';

const Indexanime = () => {
    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => {
        // Make the API request inside the useEffect
        fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
            .then((res) => res.json())
            .then((data) => {
                // Set the topAnime state with the fetched data
                setTopAnime(data.top);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Top Anime</h1>
            <ul>
                {topAnime.map((anime) => (
                    <li key={anime.mal_id}>{anime.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Indexanime;
