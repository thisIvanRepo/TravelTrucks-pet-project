import Container from "../../components/Container/Container";
import FilterForm from "../../components/FilterForm/FilterForm";
import TrucksList from "../../components/TrucksList/TrucksList";
import style from "./Catalog.module.scss";

export default function Catalog() {
  return (
    <Container className={style.catalogPage}>
        <FilterForm />
        <TrucksList />
    </Container>
  );
}
