import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const ScanPage = () => {
  const [scanResult, setScannerResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 100,
      },
      fps: 10,
    });
    const success = (result) => {
      scanner.clear();
      setScannerResult(result);
    };
    const error = (err) => {
      console.warn(err);
    };

    scanner.render(success, error);
  }, []);

  return (
    <div>
      <div className="ScanPage flex flex-col items-center w-full h-96">
        <h1 className="scanHeader flex items-center text-6xl h-32 text-gray-400">
          Scan Now
        </h1>
        {scanResult ? (
          <div>
            Success: <div className="resultCode">{scanResult}</div>
          </div>
        ) : (
          <div id="reader" className="w-3/4 h-48"></div>
        )}
      </div>
    </div>
  );
};

export default ScanPage;
