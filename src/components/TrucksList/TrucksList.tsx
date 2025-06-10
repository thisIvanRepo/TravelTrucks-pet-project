import { useSelector } from "react-redux";
import TrucksItem from "../TrucksItem/TrucksItem";
import { trucks } from "../../redux/selectors";
import ButtonUseg from "../ButtonUseg/ButtonUseg";
import { useEffect, useState } from "react";
import style from "./TruckList.module.scss";

export default function TrucksList() {
  const { cumpers, loading, error } = useSelector(trucks);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPages = 4;
  const maxPage = Math.ceil(cumpers.length / itemsPerPages);

  const startIndex = (currentPage - 1) * itemsPerPages;
  const endIndex = startIndex + itemsPerPages;
  const corentCumpers = cumpers.slice(0, endIndex);

  const hendleMore = () => {
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [cumpers]);

  return (
    <div className={style.wrapperTruckList}>
      {loading && <p>is Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {corentCumpers.map((item) => {
          return (
            <li key={item.id}>
              <TrucksItem truck={item} />
            </li>
          );
        })}
      </ul>
      {currentPage < maxPage && (
        <ButtonUseg variant="outlined" text="Load more" onClick={hendleMore} />
      )}
    </div>
  );
}
