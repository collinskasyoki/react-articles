import axios from "axios";


interface Site {
    id: number;
    title: string;
    link: string;
    description: string;
}

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

const fetchSites = async () => {
    try {
        const results = await axios.get<Site[]>(`${process.env.REACT_APP_API_BASE_URL}/sites`);
        return results.data;
    } catch (error) {
        console.error("Error fetching sites: ", error);
        throw error;
    }
}

const fetchArticles = async (page?) => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/articles?size=20`;
    if (page)
        url += `&page=${page}`

    try {
        const results = await axios.get<ArticleResults[]>(url);
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

const fetchCategories = async() => {
    try {
        const results = await axios.get<Category[]>(`${process.env.REACT_APP_API_BASE_URL}/categories`);
        return results.data;
    } catch(error) {
        console.error("Cannot fetch categories: ", error);
        throw error;
    }
}

const fetchOneCategory = async (id) => {
    try {
        const results = await axios.get<Category>(`${process.env.REACT_APP_API_BASE_URL}/categories/${id}`);
        return results.data;
    } catch (error) {
        console.error("Error fetching category: ", error);
        throw error;
    }
}

const fetchCategoryArticles = async (id, page?) => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/categories/${id}/articles?size=20`;

    if (page)
        url += `&page=${page}`

    try {
        const results = await axios.get<ArticleResults[]>(url);
        return results.data;
    } catch (error) {
        console.error("Error fetching articles for categor: ", error);
        throw error;
    }
}

export { fetchSites, fetchArticles, fetchOneArticle, fetchCategories, fetchOneCategory, fetchCategoryArticles };
