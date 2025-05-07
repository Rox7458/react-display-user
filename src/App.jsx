import "./App.scss";
import Header from "./components/header/Header";
import Card from "./components/products/Card";
import users from "./helper/data";

function App() {
  return (
    <>
      <Header />
      <div className="flexx">
        {users.map(({ id, img, name, role }) => (
          <Card key={id} img={img} name={name} role={role} />
        ))}
      </div>
    </>
  );
}

export default App;
