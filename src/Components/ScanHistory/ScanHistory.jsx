import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../../constants.js';
import S from './ScanHistory.module.css';

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

  return (
    <div className={S.container}>
      {data.map((text, index) => (
        <div className={S.card} key={`${text}-${index}`}>
          <p className={S.qrcode}>
            <QRCodeSVG value={text} size={100} />
          </p>
          <p className={S.qrcode}>{text}</p>
        </div>
      ))}
    </div>
  );
};
