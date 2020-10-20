import React from 'react';
import '../App.css';

const Links = ({ links, onDelete }) => {
    const getClickableLink = link => {
        return link.startsWith("https://") || link.startsWith("https://") ?
            link
            : `https://${link}`;
    };
    return (
        <div>
            {links.map((link, index) => {
                return (
                    <div
                        className="link"
                        key={index}
                    >
                        <p>
                            <a
                                href={getClickableLink(link.url)}
                                target="_blank"
                                rel="noopener noreferrer">
                                {link.name}
                            </a>
                        </p>
                        <p>
                            {link.tag}
                        </p>
                        <button
                            className="button"
                            onClick={() => {
                                onDelete(link._id)
                            }}
                        >Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Links;
