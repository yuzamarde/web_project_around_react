import '../pages/index.css';
 
function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <footer class="footer">
      <p class="footer__copyright">Made by Yuza</p>
      <p class="footer__copyright">&copy; 2023 Around The U.S.</p>
    </footer>
  );
}

export default Footer;