import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="container mt-5">
      <div className="row" id="profile">
        <div className="col-12 d-flex justify-content-center">
          <div className="card p-4" style={{ width: "27rem" }}>
            <img
              className="mb-3 rounded-circle"
              src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-in-the-style-of-2d-game-art-image_2884743.jpg"
              alt=""
              width={"120px"}
              height={"120px"}
            />
            <p className="fs-5">First Name : Harry</p>
            <p className="fs-5">Last Name : Portter</p>
            <p className="fs-5">Mobile Number : +91 0000000000</p>
            <p className="fs-5">E-mail Id : Harryportter@gmail.com </p>
            <div className="d-flex gap-4">
              <Link to="/cart">
                <button className="btn btn-secondary">
                  <i className="bi bi-bag-check-fill text-warning"></i> &nbsp; Cart
                </button>
              </Link>
              <Link to="/wishlist">
                <button className="btn btn-primary">
                  <i className="bi bi-heart-fill text-danger"></i> &nbsp; Wishlist
                </button>
              </Link>
              <Link>
                <button className="btn btn-danger">Sign Out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
