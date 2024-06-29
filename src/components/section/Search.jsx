import React from 'react'

export const Search = () => {
    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor="searchInput">
                    <span className='ir'>검색</span>
                </label>
                <input className='search__input' type="search" name='searchInput' id='searchInput' autoComplete='off' placeholder='검색어를 입력해주세요.'/>
            </div>
        </div>
    )
}
