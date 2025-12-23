import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import S from './QrCodeGenerator.module.css';
import { GENERATE_DATA } from '../../constants.js';

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue('');
  };

  const onCancelHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className={S.container}>
      <input
        className={S.input}
        type="text"
        value={value}
        onChange={onCancelHandler}
        placeholder="Введите текст..."
      />
      <button className={S.button} type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>
      {result !== '' && (
        <div className={S.result}>
          <QRCodeSVG value={value} size={200} />
        </div>
      )}
    </div>
  );
};
