import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div
      className="container mt-5"
      style={{ height: "500px", boxShadow: "0 0 10px skyblue" }}
    >
      <div className="row h-100">
        <div className="col-4 bg-dark">
          <div className="container fs-5 d-flex flex-column justify-content-evenly align-items-center h-100 ">
            <div className="row">
              <div className="col-12">
                <Link
                  to={"Account-details"}
                  className="text-white text-decoration-none"
                >
                  My Account
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Link
                  to={"Address-details"}
                  className="text-white text-decoration-none"
                >
                  Address Details
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Link
                  to={"Help-center"}
                  className="text-white text-decoration-none"
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
