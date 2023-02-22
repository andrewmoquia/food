export interface ISearchBar {
    searchInput: string;
    onSearchInput: (value: string) => void;
    onSearchEnd: () => void;
}
