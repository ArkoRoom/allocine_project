import React from 'react';

const SearchBar = () => {
    return(
        <div className="mx-auto w-1/2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
            <div class="mt-4">
                <input type="text" name="first-name" id="first-name" class="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Star wars, Retour vers le futur...' />
            </div>
        </div> 
    )
}

export default SearchBar;