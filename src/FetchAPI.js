import React, { useEffect, useState } from 'react'

const FetchAPI = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/posts").then((response) => {
            response.json().then((result) => {
                setPosts(result)
            })
        })
    })

    return (
        <React.Fragment>
            <h1>Fetch API in ReactJs</h1>
            {posts.map((pst) => {
                return (
                    <React.Fragment>
                        <h3>User Id: {pst.userId}</h3>
                        <h3>Id: {pst.id}</h3>
                        <h3>Title: {pst.title}</h3>
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

export default FetchAPI