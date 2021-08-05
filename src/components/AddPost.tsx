import React from "react";

type AddPostProps = {
    doChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    doClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function AddPost(props: AddPostProps) {
    return (
        <div className="post-container add-post-container">
            <input
                placeholder="Soc..."
                className="add-post-input"
                type="text"
                onChange={props.doChange}
            />
            <button className="btn-add-post btn" onClick={props.doClick}>Post Soc</button>
        </div>
    );
}

export default AddPost;
