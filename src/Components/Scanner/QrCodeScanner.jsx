import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import S from './QrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants.js';

export const QrCodeScanner = () => {
  const [scan, setScan] = useState(null);

  const handleScan = (result) => {
    setScan(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue]),
    );
  };

  return (
    <div className={S.container}>
      <Scanner
        //allowMultiple
        onScan={handleScan}
        onError={(error) => console.error(error)}
        components={{
          audio: false,
          finder: false,
        }}
        sound={false}
        styles={{
          container: { width: 200, height: 200 },
        }}
      />
      <p className={S.result}>{scan}</p>
    </div>
  );
};
