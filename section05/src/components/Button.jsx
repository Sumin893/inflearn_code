const Button = ({text, color, children}) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button 
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
      style={{ color: color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

//색을 지정해 주지 않은 애들이 있을 때 "- {props.color}"이게 추가되면 오류가 발생할 수 있음 => 색을 정해주지 않았을 때 default값을 설정해주기.
Button.defaultProps = {
  color: "Black",
};

export default Button;