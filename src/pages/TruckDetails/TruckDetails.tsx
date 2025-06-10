import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchTrucksDetails } from "../../api/trucks";
import style from "./TruckDetails.module.scss";
import Container from "../../components/Container/Container";

export default function TruckDetails() {
  const location = useLocation();
  const { catalogId } = useParams();

  const [trackDetails, setTrackDetails] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMoreInfo = async (id) => {
      try {
        setIsLoading(true);
        const data = await fetchTrucksDetails(id);
        console.log(data);
        setTrackDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoreInfo(catalogId);
  }, [catalogId]);

  return (
    <Container className={style.detailsContainer}>
      <div className={style.headerDetails}>
        <h2 className={style.title}>{trackDetails.name}</h2>
      </div>
    </Container>
  );
}
