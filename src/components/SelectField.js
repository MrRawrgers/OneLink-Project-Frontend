import React from 'react';

const Select = ({ setCategory }) => {
  return (
    <select
      id="categories"
      className="input-field"
      onChange={e => setCategory(e.target.value)}
    >
      <option value="" >Select a category</option>
      <option value="memes" >Memes</option>
      <option value="travel">Travel</option>
      <option value="music">Music</option>
      <option value="books">Books</option>
      <option value="movies">Movies</option>
      <option value="articles">Articles</option>
      <option value="food">Food</option>
      <option value="games">Games</option>
      <option value="artwork">Artwork</option>
      <option value="business">Business</option>
      <option value="lifestyle">Lifestyle</option>
      <option value="education">Education</option>
      <option value="other">Other</option>
    </select>
  )
}

export default Select;