import Head from "next/head";
import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation(params) {
  return (
    <header className={classes.header}>
      <li>
        <Link href="/">
          <a>
            <Logo></Logo>
          </a>
        </Link>
      </li>

      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;
