import axios from "axios";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import AddPost from "./AddPost";
import Post, { PostType } from "./Post";

type FeedProps = {
    currentUser: string;
}

function Feed(props: FeedProps) {
    const [postsList, setPostsList] = useState<PostType[]>([]);
    const [currentPost, setCurrentPost] = useState<string>("");
    const [currentReply, setCurrentReply] = useState<string>("");
    const [currentUser, setCurrentUser] = useState<string>(props.currentUser);

    useEffect(() => {
        setCurrentUser(props.currentUser);
    }, [props.currentUser])

    const doPostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPost(event.currentTarget.value);
    }
    
    const doPostSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newPost: PostType = {
            nanoid: nanoid(),
            post: currentPost,
            user: currentUser,
            replyTo: "",
            isReply: false
        };
        setPostsList([...postsList, newPost]);
        axios.post(process.env.REACT_APP_BACKEND_URL + "/api/add-post", JSON.stringify(newPost));
    }

    const doReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentReply(event.currentTarget.value);
    };

    const doReplyClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
        const newReply: PostType = {
            nanoid: nanoid(),
            post: currentReply,
            user: currentUser,
            replyTo: id,
            isReply: true
        }
        setPostsList([...postsList, newReply]);
        axios.post(process.env.REACT_APP_BACKEND_URL + `/api/add-reply/${id}`, JSON.stringify(newReply));
    };

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_BACKEND_URL + "/api/get-posts")
            .then((res) => {
                setPostsList(res.data);
            });
    }, []);

    return (
        <div className="feed-container">
            <AddPost doChange={doPostChange} doClick={doPostSubmit} />
            {postsList.map((post) => {
                return (
                    <Post
                        nanoid={post.nanoid}
                        post={post.post}
                        user={post.user}
                        isReply={post.isReply}
                        replyTo={post.replyTo}
                        otherPosts={postsList}
                        doReplyClick={doReplyClick}
                        doReplyChange={doReplyChange}
                    />
                );
            })}
        </div>
    );
}

export default Feed;
