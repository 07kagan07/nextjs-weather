import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

function WheatherCard({ data }) {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.card}>
        <div className={styles.content}>
          <h3>{data.day}</h3>
          <img className="img-fluid" src={data.icon} alt="whather icon" fill />
          <h2>{data.degree} C°</h2>
          <h2>{data.description}</h2>
        </div>
      </div>
    </div>
  );
}

export default WheatherCard;
