"use client";
import useSwr from "swr";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Link from "next/link";

const PageBlogsId = ({ params }: { params: { id: string } }) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSwr(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return (
    <>
    <Button>
        <Link className="text-white" href={'/blogs'}>Back to blogs</Link>
    </Button>
    <Card className="text-center">
      <Card.Header>{data?.title}</Card.Header>
      <Card.Body>
        <Card.Text>{data?.content}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{data?.author}</Card.Footer>
    </Card></>
  );
};

export default PageBlogsId;
