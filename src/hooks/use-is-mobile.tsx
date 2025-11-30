import { useEffect, useState } from "react";
import { getDeviceType } from "@/lib/utils";

export function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(getDeviceType() === "mobile");
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return mobile;
}
