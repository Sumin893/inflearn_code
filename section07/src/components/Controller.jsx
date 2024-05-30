const Controller = ({onClickButton}) => {
  return <div>
    <button
      onClick={() => {
        onClickButton(-1);
      }}
    >
      -1
    </button>

    <button
      onClick={() => {
        onClickButton(-10);
      }}
    >
      -10
    </button>

    <button
      onClick={() => {
        onClickButton(-100);
      }}
    >
      -100
    </button>

    <button
      onClick={() => {
        onClickButton(+100);
      }}
    >
      +100
    </button>

    <button
      onClick={() => {
        onClickButton(+10);
      }}
    >
      +10
    </button>

    <button
      onClick={() => {
        onClickButton(+1);
      }}
    >
      +1
    </button>
  </div>;
};

export default Controller;

//여러 개의 component들이 서로 부모와 자식 관계를 이루며 계층 관계를 가진다.
//특정 컴포넌트가 다른 컴포넌트에게 데이터를 전달하려면 반드시 두 component는 서로 부모 자식 관계를 가지고 있어야 한다.
//하나의 state를 여러 component에서 관리하게 될 경우 이 state는 반드시 component들의 공통 부모가 되는 곳에 만들어야 된다. : "state Lifting (state끌어 올리기)""
//react에서는 props를 통해 부모에서 자식방향으로만 데이터를 전달할 수 있다.