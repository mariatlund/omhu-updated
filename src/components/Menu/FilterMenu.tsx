import { FilterOptions } from "@/types/filterOptions";
import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import FilterSettings from "./FilterSettings";

export interface FilterMenuProps {
  handlePriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFilter: FilterOptions;
  setSelectedFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

function FilterMenu({ handleFilter, handlePriceChange, selectedFilter, setSelectedFilter }: FilterMenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="relative">
      <Button intent="secondary" kind="base" size="large" label="Filter" icon="filter" callback={() => setShowMenu(!showMenu)} />
      {showMenu && <FilterSettings onChangeCategory={handleFilter} onChangePrice={handlePriceChange} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />}
    </div>
  );
}

export default FilterMenu;
