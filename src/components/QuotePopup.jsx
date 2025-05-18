import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

const QuotePopup = ({ quote, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [selectedFont, setSelectedFont] = useState('Poppins');
  const [boldness, setBoldness] = useState(400);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const images = [image1, image2, image3, image4, image5];
  const colors = [
    '#FFFFFF', '#FF5733', '#33FF57', '#3357FF', '#FF33A1',
    '#FFD700', '#00FFFF', '#FF4500', '#32CD32', '#FF69B4',
  ];
  const fonts = [
    'Poppins', 'Montserrat', 'Lobster', 'Inter', 'Arial',
    'Georgia', 'Courier New', 'Verdana', 'Times New Roman',
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1080;
    canvas.height = 1080;

    const img = new Image();
    img.src = selectedImage;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.font = `${boldness} ${isItalic ? 'italic' : ''} 60px ${selectedFont}`;
      ctx.fillStyle = selectedColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (isUnderline) {
        ctx.strokeStyle = selectedColor;
        ctx.lineWidth = 2;
      }

      const maxWidth = canvas.width - 100;
      const lineHeight = 80;
      const words = quote.split(' ');
      let line = '';
      let y = canvas.height / 2;

      let totalHeight = 0;
      words.forEach((word) => {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && line) {
          totalHeight += lineHeight;
          line = word + ' ';
        } else {
          line = testLine;
        }
      });
      totalHeight += lineHeight;

      y = (canvas.height - totalHeight) / 2 + lineHeight / 2;

      line = '';
      words.forEach((word, index) => {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && index > 0) {
          ctx.fillText(line.trim(), canvas.width / 2, y);
          if (isUnderline) ctx.strokeText(line.trim(), canvas.width / 2, y);
          line = word + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      });

      ctx.fillText(line.trim(), canvas.width / 2, y);
      if (isUnderline) ctx.strokeText(line.trim(), canvas.width / 2, y);

      const link = document.createElement('a');
      link.download = 'quote.png';
      link.href = canvas.toDataURL();
      link.click();
    };
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 style={{ zIndex: 1000 }}">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 w-full max-w-5xl flex flex-col md:flex-row gap-8 max-h-[90vh] border border-white border-opacity-20">
        {/* Live Preview */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="w-96 h-96 bg-cover bg-center rounded-xl flex items-center justify-center"
            style={{ backgroundImage: `url(${selectedImage})`, backgroundSize: 'cover' }}
          >
            <p
              className="text-2xl italic text-center p-4"
              style={{
                color: selectedColor,
                fontFamily: selectedFont,
                fontWeight: boldness,
                fontStyle: isItalic ? 'italic' : 'normal',
                textDecoration: isUnderline ? 'underline' : 'none',
              }}
            >
              "{quote}"
            </p>
          </div>
        </div>

        {/* Editing Panel */}
        <div className="flex-1 overflow-auto">
          <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">Customize Your Quote</h2>

          {/* Image Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 font-inter">Choose Background Image</h3>
            <div className="grid grid-cols-3 gap-4">
              <label className="w-full h-24 rounded-xl cursor-pointer flex-shrink-0 bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                <span className="text-white font-inter"><i className="fas fa-upload mr-2"></i> Upload</span>
              </label>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`w-full h-24 object-cover rounded-xl cursor-pointer ${selectedImage === image ? 'border-4 border-yellow-300' : ''}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 font-inter">Choose Text Color</h3>
            <div className="flex flex-wrap gap-4">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor === color ? 'border-4 border-yellow-300' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Font Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 font-inter">Choose Font</h3>
            <div className="flex flex-wrap gap-4">
              {fonts.map((font, index) => (
                <button
                  key={index}
                  className={`p-2 rounded-xl ${selectedFont === font ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' : 'bg-white bg-opacity-20 text-white'}`}
                  style={{ fontFamily: font }}
                  onClick={() => setSelectedFont(font)}
                >
                  {font}
                </button>
              ))}
            </div>
          </div>

          {/* Boldness Counter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 font-inter">Boldness</h3>
            <input
              type="range"
              min="400"
              max="900"
              step="100"
              value={boldness}
              onChange={(e) => setBoldness(Number(e.target.value))}
              className="w-full accent-yellow-400"
            />
            <p className="text-sm text-gray-300 font-inter">Current Boldness: {boldness}</p>
          </div>

          {/* Text Styling Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2 font-inter">Text Styling</h3>
            <div className="flex gap-4">
              <button
                className={`p-2 rounded-xl ${isItalic ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' : 'bg-white bg-opacity-20 text-white'}`}
                onClick={() => setIsItalic(!isItalic)}
              >
                Italic
              </button>
              <button
                className={`p-2 rounded-xl ${isUnderline ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' : 'bg-white bg-opacity-20 text-white'}`}
                onClick={() => setIsUnderline(!isUnderline)}
              >
                Underline
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 py-6">
            <button
              className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl font-inter"
              onClick={onClose}
            >
              <i className="fas fa-times mr-2"></i> Close
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-inter"
              onClick={handleDownload}
            >
              <i className="fas fa-download mr-2"></i> Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;