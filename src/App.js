import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import ApiProvider from "./contexts/ApiProvider";
import Container from "react-bootstrap/Container";
import ExplorePage from "./pages/ExplorePage";
import FlashProvider from "./contexts/FlashProvider";
import Header from "./components/Header";
import HistoryListPage from "./components/HistoryList";
import HistoryPage from "./pages/HistoryPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import RegistrationPage from "./pages/RegistrationPage";
import RollupPage from "./pages/RollupPage";
import TranslationsPage from "./pages/TranslationsPage";
import UserPage from "./pages/UserPage";
import UserProvider from "./contexts/UserProvider";

export default function App() {
  return (
    <Container className="App">
      <HashRouter>
        <FlashProvider>
          <ApiProvider>
            <UserProvider>
              <Header />
              <Routes>
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="*"
                  element={
                    <PrivateRoute>
                      <Routes></Routes>
                    </PrivateRoute>
                  }
                />
                <Route path="/" element={<HistoryListPage />} />
                <Route path="/translations/collections" element={<HistoryListPage />} />
                {/* <Route path="/" element={<TranslationsPage />} /> */}
                <Route path="/collection/:start/:end" element={<HistoryPage />} />
                {/* <Route path="/collections" element={<HistoryListPage />} /> */}
                {/* <Route path="/rollup" element={<RollupPage />} /> */}
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/user/:username" element={<UserPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </UserProvider>
          </ApiProvider>
        </FlashProvider>
      </HashRouter>
    </Container>
  );
}
