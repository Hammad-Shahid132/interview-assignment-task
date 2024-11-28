import React, { useState } from "react";
import "./AddCheckInModal.css";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
export default function AddCheckInModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title || !image) {
      alert("Please provide both a title and an image.");
      return;
    }

    onSubmit({ title, image });
    setTitle("");
    setImage(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <form onSubmit={handleFormSubmit}>
          <div className="modal-header">
            <h2 className="modal-title">Add Check In</h2>
            <button type="button" className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                id="title"
                className="form-input"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Upload Image</label>
              <div className="file-upload">
                <input
                  type="file"
                  accept="image/*"
                  id="file-upload"
                  className="file-input"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <div className="mui-logo">
                <InboxOutlinedIcon fontSize="large"/>
                </div>
                <label htmlFor="file-upload" className="file-label">
                  Click or drag file to this area to upload
                </label>
                <p className="file-text">Support for a single image upload.</p>
                {image && <p className="file-selected">Selected file: {image.name}</p>}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
