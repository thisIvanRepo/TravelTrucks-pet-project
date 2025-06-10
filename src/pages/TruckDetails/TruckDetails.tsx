import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchTrucksDetails } from "../../api/trucks";
import style from "./TruckDetails.module.scss";
import Container from "../../components/Container/Container";
import Loading from "../Loading/Loading";
import { iconsMap } from "../../constants/iconsMap";
import NavDetails from "../../components/NavDetails/NavDetails";
import type { Camper } from "../../interface/camper";

export default function TruckDetails() {
  const { catalogId } = useParams();

  const [trackDetails, setTrackDetails] = useState<Camper | null>(null);
  const [error, setError] = useState<string | false>(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMoreInfo = async (id: string) => {
      try {
        setIsLoading(true);
        const data = await fetchTrucksDetails(id);

        if (data) {
          setTrackDetails(data);
        } else {
          setError("Truck not found");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (catalogId) {
      getMoreInfo(catalogId);
    }
  }, [catalogId]);

  return (
    <Container className={style.detailsContainer}>
      {isLoading && <Loading />}
      {error && (
        <p style={{ margin: "0 auto", color: "red" }}>Error: {error}</p>
      )}
      {trackDetails && (
        <>
          <div className={style.headerDetails}>
            <h2 className={style.title}>{trackDetails.name}</h2>
            <div className={style.details}>
              <div className={style.revievsLocation}>
                <div className={style.revievsBlock}>
                  <img
                    src={iconsMap["starFull"].icon}
                    alt={iconsMap["starFull"].label}
                    width={16}
                    height={16}
                  />
                  <NavLink
                    className={style.linkRevievs}
                    to={`/catalog/${trackDetails.id}/reviews`}
                  >
                    {`${trackDetails.rating} (${trackDetails.reviews.length} Reviews)`}
                  </NavLink>
                </div>
                <div className={style.locationBlock}>
                  <img
                    src={iconsMap["Location"].icon}
                    alt={iconsMap["Location"].label}
                    width={16}
                    height={16}
                  />
                  <p className={style.textLocation}>{trackDetails.location}</p>
                </div>
              </div>
              <h2 className={style.price}>{`€${trackDetails.price}`}</h2>
            </div>
            <div className={style.information}>
              <ul className={style.imgList}>
                {trackDetails.gallery.map((images, index) => (
                  <li key={index} className={style.imgItem}>
                    <img
                      className={style.imgsTruck}
                      src={images.original}
                      alt="image truck"
                    />
                  </li>
                ))}
              </ul>
              <p className={style.details}>{trackDetails.description}</p>
            </div>
          </div>
          <NavDetails />
          <Outlet />
        </>
      )}
    </Container>
  );
}
