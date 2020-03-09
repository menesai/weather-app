import React from 'react'

function SearchForm ({handleChange, handleSubmit}) {
    // console.log(handleChange)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Enter City'
                    name='city'
                    onChange={handleChange}
                />
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default SearchForm;