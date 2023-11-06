import axios from "axios";


interface Category {
    id: number;
    name: string;
}

interface Article {
    id: number;
    content?: string;
    date_modified?: string;
    date_published: string;
    image_url?: string;
    image_thumbnail_url: string;
    link?: string;
    title: string;
    categories?: Category[];
}

interface ArticleResults {
    items: Article[];
    total: number;
    page: number;
    size: number;
    pages: number;
}

const fetchArticles = async () => {
    try {
        const results = await axios.get<ArticleResults[]>(`${process.env.REACT_APP_API_BASE_URL}/articles?size=20`);
        return results.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const fetchOneArticle = async (id) => {
    try {
        const results = await axios.get<Article>(`${process.env.REACT_APP_API_BASE_URL}/articles/${id}`);
        return results.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

export { fetchArticles, fetchOneArticle };
