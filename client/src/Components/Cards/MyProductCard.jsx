import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeletePopUp from "../PopUps/DeletePopUp";
import "./card.css";

const MyProductCard = (props) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = () => {
    navigate(`/updatePost/${props.product._id}`)
  };

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={props.product.post} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/aProduct/${props.product._id}`}>
            {props.product.title}
          </Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={props.product.createdBy.image} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <Link to={`/profile`}>
                <p>{props.product.createdBy.name}</p>
              </Link>
            </div>

            <div>
              <h6>Price</h6>
              <p>Rs. {props.product.price}</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between gap-1">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <i className="ri-delete-bin-6-line"></i> Delete
          </button>

          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={handleUpdate}
          >
            <i className="ri-refresh-line"></i> Update
          </button>
        </div>
        {showModal && <DeletePopUp setShowModal={setShowModal} postName={props.product.title} id={props.product._id} userId={props.product.createdBy._id} />}
      </div>
    </div>
  );
};

export default MyProductCard;
