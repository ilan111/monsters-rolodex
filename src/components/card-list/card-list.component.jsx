import "./card-list.styles.css";
import CardContainer from "../card-container/card-container";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} />;
    })}
  </div>
);

export default CardList;
