export interface SearchResult {
    score: number;
    show:  Show;
}

export interface Show {
    id:           number;
    url:          string;
    name:         string;
    type:         Type;
    language:     Language;
    genres:       string[];
    status:       Status;
    runtime:      number;
    premiered:    Date | null;
    officialSite: null | string;
    schedule:     Schedule;
    rating:       Rating;
    weight:       number;
    network:      Network | null;
    webChannel:   Network | null;
    externals:    Externals;
    image:        Image;
    summary:      null | string;
    updated:      number;
    _links:       Links;
}

export interface Links {
    self:             Nextepisode;
    previousepisode?: Nextepisode;
    nextepisode?:     Nextepisode;
}

export interface Nextepisode {
    href: string;
}

export interface Externals {
    tvrage:  number | null;
    thetvdb: number | null;
    imdb:    null | string;
}

export interface Image {
    medium:   string;
    original: string;
}

export enum Language {
    English = "English",
    Mongolian = "Mongolian",
}

export interface Network {
    id:      number;
    name:    string;
    country: Country | null;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: number | null;
}

export interface Schedule {
    time: string;
    days: string[];
}

export enum Status {
    Ended = "Ended",
    Running = "Running",
    ToBeDetermined = "To Be Determined",
}

export enum Type {
    Animation = "Animation",
    Documentary = "Documentary",
    Scripted = "Scripted",
}
