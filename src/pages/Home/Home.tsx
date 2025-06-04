import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import style from "./Home.module.scss";

export default function Home() {
  const navigate = useNavigate();

  const hendleClick = () => {
    navigate("/catalog");
  };

  return (
    <Section className={style.sectionHome}>
      <Container className={style.containerHome}>
        <Hero>
          <Button
            text="View Now"
            variant="contained"
            onClick={hendleClick}
          ></Button>
        </Hero>
      </Container>
    </Section>
  );
}
