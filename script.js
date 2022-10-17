const App = ({ initBtnText, initClassesList }) => {
  const [btnText, setBtnText] = React.useState(initBtnText);
  const [classesList, setClassesList] = React.useState(initClassesList);
  const btnClick = () => {
    setBtnText(`Hello from React ${Math.random()}`);
    setClassesList('btn-color');
  };

  return (
    <div className="app">
      <button className={classesList} onClick={btnClick}>
        {btnText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initBtnText="Click me please" initClassesList="" />);
