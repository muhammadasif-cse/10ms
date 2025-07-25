export interface ISearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  className?: string;
  suggestions?: string[];
  showSuggestions?: boolean;
  debounceMs?: number;
  suggestLabel?: string;
}
