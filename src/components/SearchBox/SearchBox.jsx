import { useState } from 'react';
import PropTypes from "prop-types";

export const SearchBox = ({ onChange }) => {

    const [query, setQuery] = useState('');


    const handleChange = e => {
        setQuery(e.target.value.toLowerCase().trim());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query === "") {
            alert('Enter your search query.')
        }
        onChange(query)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
SearchBox.propTypes = { 
    onChange: PropTypes.func,
}
