"use client";

import { createContext, useState } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchTerm: string;
  handleChangeSearchTerm: (newSearchTerm: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  // state
  const [searchTerm, setSearchTerm] = useState("");

  // event handlers / actions
  function handleChangeSearchTerm(newSearchTerm: string) {
    setSearchTerm(newSearchTerm);
  }

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        handleChangeSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
