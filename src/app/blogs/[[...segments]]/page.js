import React from 'react';

const SingleBlog = ({ params }) => {
    const [year, id] = params.segments || [];
    return (
        <div>
            Single Blogs {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default SingleBlog;