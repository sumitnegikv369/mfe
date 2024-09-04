import { mount } from "marketing/MarketingApp"
import { useEffect, useRef } from "react";
console.log(mount)
const MarketingApp = () => {
  const ref = useRef(null);
  useEffect(()=>{
    mount(ref.current);
  });
  return <div ref={ref}/>
}
export default MarketingApp