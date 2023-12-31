"use client";

import React, { Fragment } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import Link from "next/link";
import useWidth from "@/hooks/useWidth";

const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link href="/projects">
        <React.Fragment>
          {width >= breakpoints.xl ? (
            <img src={"/assets/images/logo/logo1 (1).svg"} alt="" />
          ) : (
            <img src={"/assets/images/logo/logo1 (1).svg"} alt="" />
          )}
        </React.Fragment>
      </Link>
    </div>
  );
};

export default Logo;
