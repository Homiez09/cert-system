import axios from 'axios';

export const fetchNews = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents?populate=*&sort[0]=id:desc`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });

        return response.data.data;
    } catch (error) {
        console.log("error", error);
        return [];
    }
}

export const fetchNewsByPage = async (page: number, pageSize?: number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents?populate=*&sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize ? pageSize : 7}`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log("error", error);
        return [];
    }
}

export const fetchNewsById = async (id: number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents/${id}?populate=*`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });
        return response.data.data;
    } catch (error) {
        console.log("error", error);
        return [];
    }
}