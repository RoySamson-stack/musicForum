import React, {useState} from "react"

export default function Forum(props){

  const [post, setPost] = useState("")

//read the input type from the form
  const handleChange = (e) => {
    setPost(e.target.value)
  }

  //submit the data
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(post)
    setPost("")
  }

//return the form to pick the data 
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={post} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}