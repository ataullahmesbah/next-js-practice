import Image from "next/image";
import Link from "next/link";

import styles from './Posts.module.css'


const PostsPage = async () => {

    const res = await fetch('http://localhost:5000/posts', {
        cache: 'no-store'
    })
    const posts = await res.json();

    // console.log(posts);



    return (
        <div className="w-full">
            <h1 className={styles.header_text}>Total Posts this sites: {posts.length}</h1>
            {
                posts.map((post) => (
                    <div key={post.id}
                        className="card mx-auto w-[70%] shadow-xl bg-blue-100 my-5 p-2 gap-10 px-5 space-y-10">
                        <div className="card-body space-y-4">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <p>{post.likes_count}</p>
                            <Link
                                href={`/posts/${post.id}`}>
                                <button className="btn  btn-primary bg-blue-400 p-2 px-3 rounded-lg">See More</button></Link>
                        </div>

                    </div>
                ))
            }



        </div>
    );
};

export default PostsPage;