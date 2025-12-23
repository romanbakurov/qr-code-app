import { GENERATE_DATA } from '../../constants.js';
import G from '../ScanHistory/ScanHistory.module.css';
import { QRCodeSVG } from 'qrcode.react';

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  return (
    <div className={G.container}>
      {data.map((text, index) => (
        <div className={G.card} key={`${text}-${index}`}>
          <p className={G.qrcode}>
            <QRCodeSVG value={text} size={100} />
          </p>
          <p className={G.qrcode}>{text}</p>
        </div>
      ))}
    </div>
  );
};
