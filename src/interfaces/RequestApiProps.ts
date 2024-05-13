interface IMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }
}

export interface ICategory {
    id: number;
    attributes: {
        name_en: string;
        name_th: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    }
}

export interface IData {
    id: number;
    attributes: {
        title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        content: string
        thumbnail: any;
        categories: {
            data: [
                {
                    id: 1;
                    attributes: {
                        name_en: string;
                        name_th: string;
                        createdAt: string;
                        updatedAt: string;
                        publishedAt: string;
                    }
                }
            ]
        }
    }
}

export interface RequestApiProps {
    status: number;
    message: string;
    data: IData[];
    meta: IMeta;
}

export interface RequestApiPropsById {
    status: number;
    message: string;
    data: IData;
}