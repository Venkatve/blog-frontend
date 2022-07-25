

import { useContext, useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post(
          "https://mern-blog-node.herokuapp.com/api/upload",
          data
        );
      } catch (err) { }
    }
    try {
      const res = await axios.put(
        "https://mern-blog-node.herokuapp.com/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      console.log(err);
    }
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <span className="">Update Account Details</span>
          <span className="">Delete Account</span>
        </div>
        <form  onSubmit={handleSubmit}>
          <div class="mb-6">
            <label for="fileInput" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" id="fileInput" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@flowbite.com" />
          </div>
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your username</label>
            <input
              onChange={(e) => setUsername(e.target.value)} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input onChange={(e) => setEmail(e.target.value)}  type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@flowbite.com" />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input  onChange={(e) => setPassword(e.target.value)} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" required />
          </div>

          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>

    </div>
  );
};

export default Settings;