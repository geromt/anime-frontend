const RANDOM_ANIME_ENDPOINT = "https://api.jikan.moe/v4/random/anime"

export async function getAnimeInfo()
{
    const response = await fetch(RANDOM_ANIME_ENDPOINT);
    const data = await response.json();
    const animeData = {
        title: data.data.title,
        imageUrl: data.data.images.jpg.large_image_url,
        score: data.data.score,
        status: data.data.status,
        rating: data.data.rating,
        season: data.data.season,
        year: data.data.year
    };

    return animeData;
}