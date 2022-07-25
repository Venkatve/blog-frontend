import { Link } from "react-router-dom";

const Post = ({ post }) => {

  return (

    <>
      <section className="px-24">
<div class="col-lg-4 col-md-12 mb-6  max-w-sm rounded-sm overflow-hidden   shadow-lg mx-96  m-10 bg-white">

  <div class="h-64 bg-cover hover:bg-gray p-1 " >
    {post.photo &&
      <Link to={`/post/${post._id}`}
        className="link">
        <img className="rounded-t-3xl"
          src={post.photo}
          alt="" />
      </Link>}
  </div>
  <div class="mx-6 my-4 border-b border-gray-light">
    <div class=" text-xl text-gray-darker mb-4 font-semibold"> <Link to={`/post/${post._id}`} className="link">
      <span className="">{post.title}</span>
    </Link></div>
    <p class="font-normal text-gray-dark text-sm mb-2 truncate ">
      {post.desc}
    </p>
    <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      <span className="postDate">
        {new Date(post.createdAt).toDateString()}
      </span>
    </p>
    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{post.username} </p>
  </div>

</div>
</section> 

    </>




  );
};

export default Post;












 
