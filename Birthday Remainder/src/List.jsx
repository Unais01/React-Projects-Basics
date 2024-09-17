import "./List.css";

function List(props) {
  const { peopleList, setPeople } = props;

  const removePerson = (id) => {
    setPeople(peopleList.filter((item) => item.id !== id));
  };
  return (
    <>
      {peopleList.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button className="remove-btn" onClick={() => removePerson(id)}>
              <i>X</i>
            </button>
          </article>
        );
      })}
    </>
  );
}

export default List;
