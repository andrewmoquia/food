export interface ISearchBarProps {
    searchInput: string;
    onSearchInput: (value: string) => void;
    onSearchEnd: () => void;
}

export interface ISearchApiParams {
    limit: number;
    location: string;
    term: string;
}

export interface ISearchApiResponse {
    status: number;
    data: unknown;
}

export interface ISearchData {
    id: string;
    alias?: string;
    name?: string;
    image_url?: string;
    is_closed?: boolean;
    url?: string;
    review_count?: number;
    categories?: [{ alias?: string; title?: string }];
    rating?: number;
    coordinates?: { latitude?: number; longitude?: number };
    transactions?: string[];
    price?: string;
    location?: {
        address1?: string;
        address2?: string;
        address3?: string;
        city?: string;
        zip_code?: string;
        country?: string;
        state?: string;
        display_address?: string[];
    };
    phone?: string;
    display_phone?: string;
    distance?: number;
}

export interface ISearchResultListProps {
    title: string;
    results: ISearchData[];
    navigation: {
        navigate: (value: string) => void;
    };
}

export interface ISearchResultItem {
    item: ISearchData;
}

export interface ISearchScreenProps {
    navigation: {
        navigate: (value: string) => void;
    };
}
