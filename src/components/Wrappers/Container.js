const Container = props => {
  const cssClasses = 'w-10/12 mx-auto ' + props.className;

  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
}


export default Container;
