import "./AboutCard.css";
function AboutCard(props) {
  const styles = {
    justifyContent: props.side,
  };
  return (
    <div style={styles} className="about-card">
      <div className="about-text-card">
        <h2>{props.h2Text}</h2>
        <p>{props.pText}</p>
      </div>
    </div>
  );
}

export default AboutCard;
