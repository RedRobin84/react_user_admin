import React from "react";

const UserRecord = (props) => {
    return (
        <div>
            <p>{props.name} ({props.age} years old)</p>
        </div>
    );
}

export default UserRecord;