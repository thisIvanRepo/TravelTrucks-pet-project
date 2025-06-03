import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <Container className={style.headerContainer}>
        <Logo />
        <Nav />
      </Container>
    </header>
  );
}
