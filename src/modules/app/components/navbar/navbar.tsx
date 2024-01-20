import React from "react";
import { useRouter } from "next/router";
import style from "./navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  const navigateToCart = () => {
    window.location.href = "/carts";
  };

  const isCartPage = router.pathname.includes("/profile");

  return (
    <div>
      <div className={style.navbar}>
        <div className={style.logo}>
          <h1>Nav! Store</h1>
        </div>
        {!isCartPage &&  (
          <div className={style.right}>
            <button onClick={navigateToCart}>
              <FaShoppingCart className={style.carticon} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

