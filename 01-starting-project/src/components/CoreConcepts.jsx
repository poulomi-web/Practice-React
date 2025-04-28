export default function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.desc} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
}
