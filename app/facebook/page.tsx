"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebook = () => {
  const route = useRouter();
  const handleGoHome = () => {
    route.push("/");
  };
  return (
    <>
      <div>Facebook</div>
      <Button variant="success" onClick={handleGoHome}>
        Go to home
      </Button>
    </>
  );
};

export default Facebook;
