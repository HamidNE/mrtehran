export interface Track {
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
