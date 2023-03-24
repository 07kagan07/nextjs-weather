"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import WheatherCard from "./wheatherCard";

const getWheather = async (city) => {
  const res = await fetch(
    `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${city}`,
    {
      headers: {
        Authorization: "apikey 2wsW7FxeD0aLa98yPMIbnF:15ENi7MXV3lcPCJ93OffjC",
        "content-type": "application/json",
      },
    },
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
};

function Wheather() {
  const [datas, setDatas] = useState();
  const [city, setCity] = useState("");

  const onHandler = async () => {
    const durum = await getWheather(city);
    await setDatas(durum);
  };
  return (
    <div className={styles.wheatherWrap}>
      <input
        className={styles.cityInput}
        type="text"
        placeholder="Bir Şehir Adı Giriniz!"
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        disabled={city?.length > 0 ? false : true}
        className={styles.btn}
        onClick={() => onHandler()}
      >
        Hava Durumunu Öğren
      </button>

      {/* {!datas && <h2>Bir Şehir Adı Giriniz!</h2>} */}
      {datas?.success === true ? (
        <div>
          <h2 className={styles.cityName}>{datas.city}</h2>
          {datas &&
            datas.result.map((data, index) => (
              <WheatherCard data={data} key={index} />
            ))}
        </div>
      ) : (
        <>
          <h2 className={styles.notFound}>
            {datas?.success === false && "Böyle Bir Şehir Bulunamadı"}
          </h2>
        </>
      )}
    </div>
  );
}

export default Wheather;
