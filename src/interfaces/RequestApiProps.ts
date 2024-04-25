interface IMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }
}

export interface IData {
    id: number,
    attributes: {
        title: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        content: string
        thumbnail: any,
        categories: {
            data: [
                {
                    id: 1,
                    attributes: {
                        name_en: string,
                        name_th: string,
                        createdAt: string,
                        updatedAt: string,
                        publishedAt: string
                    }
                }
            ]
        }
    }
}

export interface RequestApiProps {
    data: IData[] | null,
    meta: IMeta
    error?: {
        status: number,
        name: string,
        message: string,
        details: any
    
    }
}