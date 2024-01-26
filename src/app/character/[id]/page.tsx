import React from "react";

type Props = {
  params: {
    id: number;
  };
};

const page = ({ params: { id } }: Props) => {
  return <div>page for character - {id}</div>;
};

export default page;
