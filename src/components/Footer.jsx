function Footer() {
  return (
    <footer className="bg-[#6a11cb] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-6">&copy; 2025 Dream Merchants VIT. All rights reserved.</p>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="https://www.instagram.com/dreammerchantsvit" target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300">
              <img src="/assets/icons/instagram.png" alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="https://www.facebook.com/DreamMerchantsVIT/" target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300">
              <img src="/assets/icons/facebook.png" alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/company/dream-merchants-vit/" target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300">
              <img src="/assets/icons/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;