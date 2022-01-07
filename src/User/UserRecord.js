import React from "react";
import PropTypes from "prop-types"

const UserRecord = (props) => {
    return (
        <div>
            <p>{props.name} ({props.age} years old)</p>
        </div>
    );
}

UserRecord.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default UserRecord;