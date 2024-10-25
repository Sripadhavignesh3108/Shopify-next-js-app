"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
function Navbar() {
  const pathname = usePathname();
  const [navVisb, setVisibility] = useState(false);
  const LinksObject = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "products", href: "/products" },
    { name: "cart", href: "/cart" },
    { name: "help", href: "/help" },
  ];

  return (
    <nav>
      <div className="title-container">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968492.png"
          alt="Next.js logo"
          width={30}
          height={30}
        />
        <p>Shopify</p>
      </div>
      <div className="navbar-options">
        <div className="hambergerDiv">
          <label className="hamburger">
            <input
              type="checkbox"
              onClick={() => {
                setVisibility(!navVisb);
              }}
              id="input-check-box"
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
          <div
            style={navVisb ? { top: "60px" } : { top: "-100vw" }}
            className="dropDownNavOptions"
          >
            {LinksObject?.map((each) => {
              return (
                <Link
                  key={each.href}
                  href={each.href}
                  className="hamburgerLink"
                  onClick={() => {
                    setVisibility(false);
                  }}
                >
                  <p
                    style={
                      pathname == each.href
                        ? {
                            backgroundColor: "rgba(0, 0, 0, 0.778)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {each.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        {LinksObject?.map((each) => {
          return (
            <Link key={each.href} href={each.href} className="navbarLinks">
              <p
                style={
                  pathname == each.href
                    ? { backgroundColor: "black", color: "white" }
                    : {}
                }
              >
                {each.name}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
