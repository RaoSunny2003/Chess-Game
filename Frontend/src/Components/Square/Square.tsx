import { FC } from "react";
import "./Square.css";

interface Props {
  image: string | undefined;
  class: string;
}

const Square: FC<Props> = (props) => {
  return (
    <>
      <div className={props.class}>
        {props.image !== undefined ? (
          <div
            className="chessPiece"
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Square;
