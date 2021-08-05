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
    doReplyClick: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: string
    ) => void;
};

function Post(props: PostProps) {
    let posts = !props.isReply
        ? [
              <div className="post">
                  <span className="user">{"@" + props.user}</span>
                  <br />
                  <span className="post-content">{props.post}</span>
              </div>,
          ]
        : [];
    props.otherPosts.forEach((item) => {
        if (item.isReply && item.replyTo === props.nanoid)
            posts = [
                ...posts,
                <div className="reply">
                    <span className="user">{"> @" + item.user}</span>
                    <br />
                    <span className="post-content">{item.post}</span>
                </div>,
            ];
    });

    let addItem = (
        <AddReply
            doClick={(e) => props.doReplyClick(e, props.nanoid)}
            doChange={props.doReplyChange}
        />
    );
    return (
        <div className="post-container">
            {posts.map((post) => {
                return [post, addItem];
            })}
        </div>
    );
}

export default Post;
