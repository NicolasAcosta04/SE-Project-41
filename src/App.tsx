import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { Link } from "react-router-dom";

export default function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button colour="dark" onClick={() => setAlertVisibility(true)}>
        New Dynamic Button
      </Button>
      <Link to="/Login">Next Page</Link>
    </div>
  );
}
