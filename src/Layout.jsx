import { Navigation } from './Components/Navigation/Navigation.jsx';
import { Routes, Route } from 'react-router-dom';
import { QrCodeGenerator } from './Components/Generation/QrCodeGenerator.jsx';
import { QrCodeScanner } from './Components/Scanner/QrCodeScanner.jsx';
import { GenerateHistory } from './Components/GenerateHistory/GenerateHistory.jsx';
import { ScanHistory } from './Components/ScanHistory/ScanHistory.jsx';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};
