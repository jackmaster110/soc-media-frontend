import React from "react";
import { ReplyType } from "./Reply";

export type PostType = {
    nanoid: string;
    post: string;
    user: string;
    replyTo: string;
    isReply: boolean;
    asReply(): () => ReplyType;
};

type PostProps = {
    nanoid: string;
    post: string;
    user: string;
    replyTo: string;
    isReply: boolean;
    otherPosts: PostType[];
};

function Post(props: PostProps) {
    let posts = props.isReply ? [
        <div className="post">
            <span>{props.user}</span>
            <br />
            <span>{props.post}</span>
        </div>,
    ] : [<div className="post"></div>];
    props.otherPosts.forEach((item) => {
        if (props.isReply && props.replyTo === item.nanoid)
            posts = [
                ...posts,
                <div className="reply">
                    <span>{"> " + props.user}</span>
                    <br />
                    <span>{props.post}</span>
                </div>,
            ];
    });

    return (
        <div className="post-container">
            {posts.map((post) => {
                return post;
            })}
        </div>
    );
}

export default Post;
