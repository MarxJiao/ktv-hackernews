class newsItem {
    id: number;
    title: string;
    by: string;
    kids: number[];
    url: string;
}

export class State {
    ids: number[];
    newsList: newsItem[];
    constructor() {
        this.ids = [],
        this.newsList = []
    }
}