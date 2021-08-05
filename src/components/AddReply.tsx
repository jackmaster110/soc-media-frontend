import React from "react";

type AddReplyProps = {
    doChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    doClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function AddReply(props: AddReplyProps) {
    return(
        <div className="reply add-reply">
            <input type="text" placeholder="Reply..." onChange={props.doChange} />
            <button className="btn btn-primary btn-add-post" onClick={props.doClick}>Reply</button>
        </div>
    );
}

export default AddReply;