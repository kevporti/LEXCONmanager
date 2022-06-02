import React from 'react';
import ReactDOM from 'react-dom';

function FilaTabla(posts) {

    return(
        <>
            {Object.values(posts).map((post, idx) => (
                post.map((post, idx) => (
                    <div
                        key={idx}
                        className="relative p-3">
                            <h3 className="text-sm leading-5">
                            {post.title}
                            {post.date}
                            </h3>
                    </div>

                ))
            ))}
        </>
    );
}

export default FilaTabla;