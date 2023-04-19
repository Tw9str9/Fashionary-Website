import payments from "../images/payments.jpg";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="main-footer"></div>
        <div className="bottom-footer">
          <p>
          &copy; {year}. ALL RIGHTS RESERVED
          </p>
          <div className="payments">
            <p>Accept For</p>
            <img src={payments} alt="payments" />
          </div>
        </div>
      </div>
    </footer>
  );
}
