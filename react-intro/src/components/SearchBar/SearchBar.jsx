import PropTypes from "prop-types";
import { SearchInputs, Input, Search } from "./SearchStyle.js";

const SearchBar = ({ onValueChange, placeholder, disabled }) => {
  return (
    <Search>
      <SearchInputs>
        <Input
          type="text"
          placeholder={placeholder}
          onChange={onValueChange}
          disabled={disabled}
        ></Input>
        <div className="searchIcon"></div>
      </SearchInputs>
    </Search>
  );
};

SearchBar.propTypes = {
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

export default SearchBar;
