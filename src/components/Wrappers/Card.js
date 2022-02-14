const Card = props => {
  const cssClasses = 'p-2 rounded-3xl xl:p-4 ' + props.className;

  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
}


export default Card;
