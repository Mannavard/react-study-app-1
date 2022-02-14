const Card = props => {
  const cssClasses = 'p-4 rounded-3xl ' + props.className;

  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
}


export default Card;
