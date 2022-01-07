import React from "react";
import PropTypes from "prop-types"
import classes from "./UserRecord.module.css"

const UserRecord = (props) => {
    return (
        <div className={classes['user-record']}>
            <div>{props.name} ({props.age} years old)</div>
        </div>
    );
}

UserRecord.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default UserRecord;