import { Text } from "@mantine/core";
import { Divider } from "@mantine/core";
import { Loader } from "@mantine/core";
import { Center } from "@mantine/core";
import { Title } from "@mantine/core";
import { Badge } from "@mantine/core";
import { LoadingOverlay } from '@mantine/core';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        "https://6586ab08468ef171392e8a15.mockapi.io/api/v1/blogs"
      );
      setBlogs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <h1>แดชบอร์ด</h1>
      {isLoading ? (
        <Center h={'80dvh'}>
          <Loader color="blue" />
        </Center>
      ) : (
        <div>
          {blogs.map((blog, index) => (
            <div key={index}>
              <Title order={5}>{blog.name}</Title>
              <Divider my="md" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
