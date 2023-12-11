import React from "react";
import { useParams } from "react-router-dom";

function DetailUser() {
  let { userId } = useParams();
  console.log(userId);
  return <div>DetailUser</div>;
}
export default DetailUser;
