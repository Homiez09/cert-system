import { RequestApiProps } from '@/interfaces/RequestApiProps';
import { message } from 'antd';
import axios from 'axios';

const errorMessage = {
    status: 500,
    message: 'Something went wrong',
}

export const fetchNews = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents?populate=*&sort[0]=id:desc`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });

        if (response.status === 200) {
            return {
                status: response.status,
                message: response.statusText,
                data: response.data.data,
                meta: response.data.meta
            } as RequestApiProps;
        } else {
            return {
                status: response.status,
                message: response.statusText,
            }
        }
    } catch (error) {
        console.log("error", error);
        return errorMessage;
    }
}

export const fetchNewsByPage = async (page: number, pageSize?: number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents?populate=*&sort[0]=id:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize ? pageSize : 7}`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });

        if (response.status === 200) {
            return {
                status: response.status,
                message: response.statusText,
                data: response.data.data,
                meta: response.data.meta
            } as RequestApiProps;
        } else {
            return {
                status: response.status,
                message: response.statusText,
            }
        }
    } catch (error) {
        console.log("error", error);
        return errorMessage;
    }
}

export const fetchNewsById = async (id: number) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents/${id}?populate=*`, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            },
        });

        if (response.status === 200) {
            return {
                status: response.status,
                message: response.statusText,
                data: response.data.data,
            }
        } else {
            return {
                status: response.status,
                message: response.statusText,
            }
        }

    } catch (error) {
        console.log("error", error);
        return errorMessage;
    }
}