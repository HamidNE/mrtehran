export interface ITrack {
    track_id: string;
    album_id: number | string;
    release_date: string;
    track_artist: string;
    track_title: string;
    album_artist?: string;
    album_title?: string;
    track_artwork: string;
    track_thumbnail: string;
    track_audio: string;
    duration: number;
    plays: number;
    likes: number;
}

export interface IArtistInfo {
    artist_id: string;
    artist_name: string;
    artist_wallpaper: string;
    followers: number;
    total_plays: string;
    total_likes: string;
}

export interface IArtistData {
    top_songs: IArtistDataTopSongs;
    singles: IArtistDataTopSongs;
    mixes: IArtistDataTopSongs;
    albums: IArtistDataAlbums;
    playlists: IArtistDataPlaylists;
    similar_artists: IArtistDataSimilarArtists;
    artist_born: string;
    artist_hometown: string;
    artist_genre: string;
}

interface IArtistDataSimilarArtists {
    artists: IArtistInfo[];
    end: boolean;
}

interface IArtistDataPlaylists {
    playlists: IPlaylistInfo[];
    end: boolean;
}

interface IArtistDataAlbums {
    tracks: ITrack[];
    end: boolean;
}

interface IArtistDataTopSongs {
    tracks: ITrack[];
    end: boolean;
}

export interface IAlbumInfo {
    album_id: string;
    release_date: string;
    album_artist: string;
    album_title: string;
    album_artwork: string;
    total_plays: string;
    total_likes: string;
    tracks_count: number;
    total_duration: string;
}

export interface IPlaylistInfo {
    playlist_id: string;
    playlist_name: string;
    playlist_thumbnail: string;
    followers: number;
    user_id: number;
    user_name: string;
    tracks_count: number;
    total_duration: string;
}
