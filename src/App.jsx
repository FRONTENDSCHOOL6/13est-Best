import RootLayout from "./layout/RootLayout";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App">
      <RootLayout>
        <Feed />
      </RootLayout>
    </div>
  );
}

export default App;
