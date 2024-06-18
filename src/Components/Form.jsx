import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";

export function convertToEmoji(countryCode) {
  if (!countryCode) return null; // Handle case where countryCode is undefined or null

  const countryCodeLower = countryCode.toLowerCase();
  return (
    <img
      src={`https://flagcdn.com/24x18/${countryCodeLower}.png`}
      alt={`Flag of ${countryCode}`}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    />
  );
}

const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

function Form() {
  const [lat, lng] = useUrlPosition();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingerror, setgeocodingerror] = useState("");
  useEffect(() => {
    async function fetchCityData() {
      try {
        setgeocodingerror("");
        setIsLoadingGeocoding(true);
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();
        console.log("API Response:", data); // Log the response to debug
        if (!data.countryCode)
          throw new Error(
            `that is not a countryName.Provide another locations`
          );

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);

        // Check if countryCode is present
        if (data.countryCode) {
          const emoji = convertToEmoji(data.countryCode);
          console.log("Converted Emoji:", emoji); // Log the emoji to debug
          setEmoji(emoji);
        } else {
          console.error("countryCode not found in the API response");
        }
      } catch (err) {
        setgeocodingerror(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    if (lat && lng) {
      fetchCityData();
    }
  }, [lat, lng]);

  if (isLoadingGeocoding) {
    return <Spinner />;
  }
  if (geocodingerror) {
    return <Message message={geocodingerror} />;
  }

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
