import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ApiProvider from "./contexts/ApiProvider";
import Header from './components/Header';
import ExplorePage from './pages/ExplorePage';
import UserPage from "./pages/UserPage";
import LoginPage from './pages/LoginPage';
import TranslationsPage from './pages/TranslationsPage';
import RollupPage from "./pages/RollupPage";
import RegistrationPage from "./pages/RegistrationPage";
import HistoryPage from "./pages/HistoryPage";
import HistoryListPage from "./pages/HistoryListPage";
import FlashProvider from "./contexts/FlashProvider";
import UserProvider from './contexts/UserProvider';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

export default function App() {
  return (
    <Container fluid className="App">
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