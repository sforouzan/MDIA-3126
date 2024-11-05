import styles from "./DisplayDogData.module.css";

export default function DisplayDogData({ dogData, loading }) {
  if (loading) {
    return (
      <div className={styles.loadingText}>Playing fetch with the dogs...</div>
    );
  }

  if (!dogData) {
    return <div className={styles.loadingText}>Woof!</div>;
  }

  return (
    <section className={styles.dogGrid}>
      {dogData.map((dog, index) => (
        <article key={dog.id || index} className={styles.dogCard}>
          <img src={dog.url} alt="dog pic" className={styles.dogImage} />
          <div className={styles.dogInfo}>
            {dog.breeds && dog.breeds.length > 0 ? (
              <>
                <h3>{dog.breeds[0].name}</h3>
                <p>
                  <span className={styles.boldText}>Temperament:</span>{" "}
                  {dog.breeds[0].temperament}
                </p>
                <p>
                  <span className={styles.boldText}>Life Span:</span>{" "}
                  {dog.breeds[0].life_span}
                </p>
              </>
            ) : (
              <p>Breed information not available :(</p>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
