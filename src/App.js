import Users from "./components/users";
import { Container } from "@mui/system";
import Fade from "@mui/material/Fade";

function App() {
  return (
    <Fade in>
      <div className="App" style={{ marginBottom: "30px" }}>
        <Container>
          <Users></Users>
        </Container>
      </div>
    </Fade>
  );
}

export default App;
