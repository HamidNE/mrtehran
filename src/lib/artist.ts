import {fetchArtistData, fetchArtistInfo, fetchArtistLatestSongs, fetchArtistTopSongs} from "../utils/api";

export async function artistInfo(id: string) {
    return await fetchArtistInfo(id);
}

export async function artistData(id: string) {
    return await fetchArtistData(id);
}

export async function artistLatestSongs(id: string) {
    return await fetchArtistLatestSongs(id);
}

export async function artistTopSongs(id: string) {
    return await fetchArtistTopSongs(id);
}

export async function artistAlbums(id: string) {
    return await fetchArtistData(id);
}
