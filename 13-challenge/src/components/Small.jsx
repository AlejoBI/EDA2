import { memo } from "react";

const Small = memo(({ value }) => {
  console.log("Small component called");
  return <small>{value}</small>;
})

export default Small;