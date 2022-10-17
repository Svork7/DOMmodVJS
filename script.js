const App = () => {
  const [btnText, setBtnText] = React.useState('Click me');

  const btnClick = () => {
    btnText = 'Hello from React';
  };
  return (
    <div className="app">
      <button onClick={btnClick}>{btnText}</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
