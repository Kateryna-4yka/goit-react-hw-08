import { useState, useEffect } from "react";
import css from "./DiaryPage.module.css";

export default function DiaryPage() {
  const [entry, setEntry] = useState("");
  const [quote, setQuote] = useState("");
  const [savedEntry, setSavedEntry] = useState(null);

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Загрузка з localStorage при монтуванні
  useEffect(() => {
    const storedEntry = localStorage.getItem("diaryEntry");
    if (storedEntry) {
      setSavedEntry(JSON.parse(storedEntry));
    }
  }, []);

  const handleSave = () => {
    if (entry.trim() || quote.trim()) {
      const date = getCurrentDate();
      const newEntry = { date, entry, quote };
      setSavedEntry(newEntry);
      localStorage.setItem("diaryEntry", JSON.stringify(newEntry));
      setEntry("");
      setQuote("");
    }
  };

  return (
    <div className={css.div}>
      <h3 className={css.h3}>My Diary</h3>

      <label className={css.label} htmlFor="diary">
        Today: {getCurrentDate()}
      </label>

      <textarea
        className={css.input}
        id="diary"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        rows="12"
        placeholder="Write down your thoughts..."
      />

      <label className={css.label} htmlFor="quote">
        Your quote of the day:
      </label>
      <input
        className={css.input}
        id="quote"
        type="text"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        placeholder='e.g. "Everything will be okay."'
      />

      <button className={css.btn} onClick={handleSave}>
        Save
      </button>

      {savedEntry && (
        <div className={css.cont}>
          <h3>
            <strong>Date:</strong> {savedEntry.date}
          </h3>
          {savedEntry.quote && (
            <p>
              <strong>Quote of the day:</strong> '{savedEntry.quote}'
            </p>
          )}
          <p>{savedEntry.entry}</p>
        </div>
      )}
    </div>
  );
}
