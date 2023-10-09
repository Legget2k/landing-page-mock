function LinkDescription({ description, hover}) {

  return (
    <span
      className={`description ${hover ? 'show' : ''}`}

    >
      {description}
    </span>
  );
}

export default LinkDescription;