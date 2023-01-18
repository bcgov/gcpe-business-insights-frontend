import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ApiProvider from "./contexts/ApiProvider";
import Container from "react-bootstrap/Container";
import ExplorePage from "./pages/ExplorePage";
import Header from './components/Header';
import UserPage from "./pages/UserPage";
import LoginPage from './pages/LoginPage';
import TranslationsPage from './pages/TranslationsPage';
import RollupPage from "./pages/RollupPage";
import RegistrationPage from "./pages/RegistrationPage";
import HistoryPage from "./pages/HistoryPage";
import HistoryListPage from "./pages/HistoryListPage";
import FlashProvider from "./contexts/FlashProvider";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import UserProvider from "./contexts/UserProvider";

export default function App() {
  return (
    <Container className="App">
      <BrowserRouter>
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
                <Route path="/" element={<TranslationsPage />} />
                <Route path="/history/:start/:end" element={<HistoryPage />} />
                <Route path="/history-list" element={<HistoryListPage />} />
                <Route path="/rollup" element={<RollupPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/user/:username" element={<UserPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </UserProvider>
          </ApiProvider>
        </FlashProvider>
      </BrowserRouter>
    </Container>
  );
}
