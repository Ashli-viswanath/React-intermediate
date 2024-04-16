import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchPosts = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);

const usePosts = () =>
  useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000,
  });
export default usePosts;
