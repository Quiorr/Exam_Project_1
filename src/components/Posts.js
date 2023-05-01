import { useState } from "react";
import "../App.css"

export const Posts = ({posts}) => {
  const [searchPosts, setSearchPosts] = useState('')
  
  let onInputChange = (e) => {
    console.log(e.target.value)
    setSearchPosts(e.target.value)
  }

  return (
    <ul className="postsList">
      <div>
        <input type="number" placeholder="search" onChange={onInputChange}/>
      </div>
      <div>
        {posts.filter((value) => {
        if(searchPosts === '') {
          return value
        } else if (value.userId.toString().toLowerCase().includes(searchPosts.toLowerCase())) {
          return value;
        }}).map((item) => {
        return (
          <li key={item.id}>{item.id} - {item.title}</li>
        )})}
      </div>
    </ul>
  )
};
