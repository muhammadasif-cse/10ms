"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X, Sparkles } from "lucide-react";
import { ISearchInputProps } from "./interface";

const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder = "",
  onSearch,
  onClear,
  className = "",
  suggestions = [],
  showSuggestions = false,
  debounceMs = 300,
  suggestLabel = "",
}) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestionsList, setShowSuggestionsList] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      if (query.trim() && onSearch) {
        onSearch(query.trim());
      }
    }, debounceMs);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, onSearch, debounceMs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (showSuggestions && value.trim()) {
      setShowSuggestionsList(true);
    } else {
      setShowSuggestionsList(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    setShowSuggestionsList(false);
    if (onClear) {
      onClear();
    }
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestionsList(false);
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  const filteredSuggestions = suggestions
    .filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

  return (
    <div className={`${className}`}>
      <div className="w-full">
        <div className="relative flex w-full flex-col items-center bg-white z-50">
          <div
            className={`rounded-full flex w-full items-center gap-3 border px-4 py-1.5 transition-all duration-200 ease-in-out bg-white
            ${
              isFocused
                ? "border-gray-300"
                : "border-gray-200 hover:border-gray-300"
            }
          `}
          >
            <div className="relative">
              <Search
                className={`w-6 h-6 transition-colors duration-200 ${
                  isFocused ? "text-blue-500" : "text-gray-400"
                }`}
              />
              {isFocused && (
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-3 h-3 text-orange-400 animate-pulse" />
                </div>
              )}
            </div>
            <input
              ref={inputRef}
              type="text"
              autoComplete="off"
              autoCorrect="off"
              placeholder={placeholder}
              className="w-full flex-1 placeholder:text-sm placeholder:font-normal 
                         placeholder:leading-5 placeholder:text-gray-400 
                         focus:outline-none bg-transparent text-gray-800"
              name="search"
              value={query}
              onChange={handleInputChange}
              onFocus={() => {
                setIsFocused(true);
                if (showSuggestions && query.trim()) {
                  setShowSuggestionsList(true);
                }
              }}
              onBlur={() => {
                setIsFocused(false);
                setTimeout(() => setShowSuggestionsList(false), 200);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && query.trim() && onSearch) {
                  onSearch(query.trim());
                  setShowSuggestionsList(false);
                }
                if (e.key === "Escape") {
                  setShowSuggestionsList(false);
                  inputRef.current?.blur();
                }
              }}
            />

            {query && (
              <button
                onClick={handleClear}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 
                           text-gray-400 hover:text-gray-600"
                type="button"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* suggestions dropdown */}
          {showSuggestions &&
            showSuggestionsList &&
            filteredSuggestions.length > 0 && (
              <div
                className="absolute top-full left-0 right-0 bg-white border border-gray-200 
                           rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto mt-1"
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-700">
                    {suggestLabel}
                  </span>
                </div>
                <div className="py-2">
                  {filteredSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-2.5 hover:bg-gray-50 
                             transition-colors duration-150 text-sm text-gray-700
                             flex items-center gap-3 group"
                    >
                      <Search className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
                      <span className="truncate">{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
