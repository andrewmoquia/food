export interface ISearchBar {
    searchInput: string;
    onSearch: (value: string) => void;
    onSearchEnd: () => void;
}
