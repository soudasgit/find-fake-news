import React, { useState } from 'react';
import DisplayNews from './DisplayNews';

function SearchForm() {

   const [showResults, setShowResults] = useState(false);
     const [searchTerm, setSearchTerm] = useState('');

     const handleSearchClick = () => {
       setShowResults(true);
     };

      const handleChange = (e) => {
        setShowResults(false);
        setSearchTerm(e.target.value);
      };

     return (
       <div>
         <input
           type="text"
           value={searchTerm}
           onChange={(e) => handleChange(e)}
         />
         <button onClick={handleSearchClick}>Search</button>
         {showResults && <DisplayNews searchTerm={searchTerm} />}
       </div>
     );
}

export default SearchForm;