import type { ReactNode } from "react";
import styles from "./Section.module.scss";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={clsx(styles.container, className)}>{children}</section>
  );
}
