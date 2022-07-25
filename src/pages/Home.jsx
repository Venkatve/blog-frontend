
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";

import axios from "axios";
import { useLocation } from "react-router";
import { URLDevelopment } from "../Helper/Url";



const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${URLDevelopment}api/posts` + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;