import React from 'react';

const Path = (props) => {
    const {name, path} = props.route;
    return (
        <li className='mr-16'>
            <a href={path}>{name}</a>
        </li>
    );
};

export default Path;