'use client'

import { useParams, useSearchParams } from "next/navigation";
import { title } from "process";

const SingleBlog = ({ params, searchParams }) => {
    const [year, id] = params.segments || [];
    const params2 = useParams();
    const searchParams2 = useSearchParams();

    console.log(params2.segments,  searchParams2.get("title"));



    return (
        <div>
            Single Blogs {year || new Date().getFullYear()} for {id}

            <br />
            {searchParams.title}
        </div>
    );
};

export default SingleBlog;