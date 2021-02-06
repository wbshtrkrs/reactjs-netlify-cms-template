import React from "react"
import { Link } from "react-router-dom"
// import Markdown from "react-markdown"
import homeList from "../../metadata/home.json"

import "./component.css"

const HomeList = () => {
    const excerptList = homeList.map(post => {
        debugger
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })

    const createMarkup = (content) => {
        return { __html: content }
    }
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {homeList.length &&
                homeList.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                            <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={80} src={post.thumbnail} alt="" />}
                                <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            </div>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr />
                            {/* <Markdown source={excerptList[i]} escapeHtml={false} /> */}
                            {/* <div dangerouslySetInnerHTML={createMarkup(excerptList[i])}/> */}
                            <small><Link className="links" to={`/post/${post.id}`}>Read more</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomeList