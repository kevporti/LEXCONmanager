import React from 'react';
import ReactDOM from 'react-dom';

function FilaTabla(posts) {

    {console.log(posts)}

    return(
        // {posts.map((post) => (
            <div
                // key={post.id}
                className="relative p-3">
                    <h3 className="text-sm leading-5">
                    {/* {post.title} */}
                    </h3>
            </div>
        // ))}
    );
}

export default FilaTabla;