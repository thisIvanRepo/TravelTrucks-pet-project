import style from "./FiltersTitle.module.scss";

type Props = {
  children: string;
};

export default function FiltresTitle({ children }: Props) {
  return <h3 className={style.title}>{children}</h3>;
}
