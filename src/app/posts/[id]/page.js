import Link from "next/link";

export async function generateStaticParams() {

    const res = await fetch('http://localhost:5000/posts');
    const posts = await res.json();

    const ids = posts.map(post => {
        return {
            id: post.id + ''
        }
    });
    // console.log(ids);


    return ids;
}


const PostsDetailsPage = async ({ params }) => {

    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();
    // console.log(post);


    return (

        <div
            className="card mx-auto w-[70%] shadow-xl bg-blue-100 my-5 p-2 gap-10 px-5 space-y-10">
            <div className="card-body space-y-4">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.likes_count}</p>

                <Link
                    href='/posts'>
                    <button className="btn  btn-accent bg-blue-400 p-2 px-3 rounded-lg">Back</button></Link>

            </div>


        </div>
    );
};

export default PostsDetailsPage;