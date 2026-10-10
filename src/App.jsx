import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Ledgent from './pages/Ledgent';
import TelegramBot from './pages/TelegramBot';
import Ambit from './pages/Ambit';
import Nomos from './pages/Nomos';
import NomosDiscoveries from './pages/NomosDiscoveries';
import NotFound from './pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="docs" element={<Docs />} />
        <Route path="ledgent" element={<Ledgent />} />
        <Route path="ambit" element={<Ambit />} />
        <Route path="privacy" element={<Ambit />} />
        <Route path="nomos" element={<Nomos />} />
        <Route path="nomos/privacy" element={<Nomos />} />
        <Route path="nomos/discoveries" element={<NomosDiscoveries />} />
        <Route path="features/telegram-bot" element={<TelegramBot />} />
        <Route path="integrations/telegram" element={<TelegramBot />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
