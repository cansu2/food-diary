import React from 'react';

interface IEntry {
    name: string;
    description: string;
}
interface IEntryProps {
    entry: IEntry
}

export default (props: IEntryProps)=> {
    const {name, description} = props.entry;
    return (<div className="entryContainer">
        <h3>{name}</h3>
        <p>{description}</p>
    </div>);
}