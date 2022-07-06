import React from 'react'

interface Props {
    link: string;
    name: string;
    desc?: string;
}

export const Project: React.FC<Props> = ({link, name, desc}) => {
    return (
        <a href={link} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
            <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                    <h6 className="mb-0">{name}</h6>
                    <p className="mb-0 opacity-75">{desc}</p>
                </div>
            </div>
        </a>
    )
};