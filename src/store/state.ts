class newsItem {
    id: number;
    title: string;
    by: string;
    kids: number[];
    url: string;
}

export class State {
    page:number;
    ids: number[];
    newsList: newsItem[];
    constructor() {
        this.ids = [];
        this.newsList = [];
        this.page = 0
    }
}