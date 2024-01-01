import Link from "next/link";
import { title } from "process";

export const metadata = {
    title: 'Blogs | New 2024',
    description: 'Next Hero',
}

const blogs = [
    {
        id: 1,
        year: 2024,
        title: 'title 1'
    },
    {
        id: 2,
        year: 2024,
        title: 'title 2'
    },
    {
        id: 3,
        year: 2024,
        title: 'title 3'
    },
    {
        id: 4,
        year: 2024,
        title: 'title 4'
    }
]

const BlogsPage = () => {
    return (
        <div className="container mx-auto">
            {
                blogs.map(({ id, year, title }) =>
                    <Link className="block border  border-blue-500 p-2 my-2"
                        // href={`/blogs/${year}/${id}`}

                        href={{
                            pathname: `/blogs/${year}/${id}`,
                            query: {
                                title: title,
                            },
                        }}
                        key={id}>
                        {title}
                    </Link>)
            }
        </div>
    );
};

export default BlogsPage;