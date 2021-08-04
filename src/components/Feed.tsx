import axios from "axios";
import React, { useEffect, useState } from "react";
import Post, { PostType } from "./Post";

function Feed() {
    const [postsList, setPostsList] = useState<PostType[]>([]);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_BACKEND_URL + "/api/get-posts")
            .then((res) => {
                setPostsList(res.data);
            });
    }, []);

    return (
        <div className="feed-container">
            {postsList.map((post) => {
                return (
                    <Post
                        nanoid={post.nanoid}
                        post={post.post}
                        user={post.user}
                        isReply={post.isReply}
                        replyTo={post.replyTo}
                        otherPosts={postsList}
                    />
                );
            })}
        </div>
    );
}

export default Feed;
