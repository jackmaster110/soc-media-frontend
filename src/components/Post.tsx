import React from "react";
import AddReply from "./AddReply";

export type PostType = {
    nanoid: string;
    post: string;
    user: string;
    replyTo: string;
    isReply: boolean;
};

type PostProps = {
    nanoid: string;
    post: string;
    user: string;
    replyTo: string;
    isReply: boolean;
    otherPosts: PostType[];
    doReplyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    doReplyClick: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void;
};

function Post(props: PostProps) {
    let posts = !props.isReply ? [
        <div className="post">
            <span className="user">{"@" + props.user}</span>
            <br />
            <span className="post-content">{props.post}</span>
        </div>
    ] : [<div className="empty-post"></div>];
    props.otherPosts.forEach((item) => {
        if (props.isReply && props.replyTo === item.nanoid)
            posts = [
                ...posts,
                <div className="reply">
                    <span className="user">{"> @" + props.user}</span>
                    <br />
                    <span className="post-content">{props.post}</span>
                </div>,
            ];
    });

    return (
        <div className="post-container">
            {posts.map((post) => {
                return post;
            })}
            <AddReply doClick={(e) => props.doReplyClick(e, props.nanoid)} doChange={props.doReplyChange} />
        </div>
    );
}

export default Post;
