import React from "react";
import { API } from "../../backend";

const ImageHelperCustomer = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : `https://media.istockphoto.com/vectors/error-like-laptop-with-dead-emoji-cartoon-flat-minimal-trend-modern-vector-id1011988208?k=6&m=1011988208&s=612x612&w=0&h=6l7ZtOJxcQ_xTThiNX_X0XWKRDx9rKZzgjSePb0XmtQ=`;
  return (
    <div style={{ Width: "100%" }}>
      <img
        src={imageUrl}
        alt="img"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="text-center"
      />
    </div>
  );
};

export default ImageHelperCustomer;
