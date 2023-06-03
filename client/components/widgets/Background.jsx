import { useEffect, useState } from "react";

export default function Background({className, children, imgSrc}) {

  const [imgUrl, setImgUrl] = useState(imgSrc || "background-1.jpg");

  useEffect(() => {
    setImgUrl(imgSrc || "background-1.jpg");
  }, [imgSrc])

  return (
    <section className={className} style={{ backgroundImage: `url('${imgUrl}')` }}>{children}</section>
  )
}
