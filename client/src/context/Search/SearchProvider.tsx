import { useState } from "react";
import { SearchContext } from "./SearchContext";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, handleSearchChange }}>
      {children}
    </SearchContext.Provider>
  );
};
