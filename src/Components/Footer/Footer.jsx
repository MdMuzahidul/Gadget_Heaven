const Footer = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Gadget Heaven</h3>
          <p className="text-lg mb-4">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr />
        <footer className="footer flex justify-between text-base-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
