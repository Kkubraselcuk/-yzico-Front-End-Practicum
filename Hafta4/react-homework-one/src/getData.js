import axios from "axios";

export const getData = async (userId) => {
    // axios ile user alınması
    const fetchUser = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const user = fetchUser.data;
    console.log("user : " ,user);

    // axios ile post alınması
    const fetchPost = await axios("https://jsonplaceholder.typicode.com/posts?id=" + userId);
    const post = await fetchPost.data[0];
    console.log("post : " ,post);

    // iki objeninde ekleneceği data dizisi
    const data = [];

    //data dizisine user objesinin eklenmesi
    data.push(user);
    
    //data dizisine post objesinin eklenmesi
    data.push(post);
    
    console.log("data :" ,data);
    return {data};
};