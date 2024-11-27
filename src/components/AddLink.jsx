import React, { useState } from "react";

const AddLink = ({ closeModal }) => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [error, setError] = useState("");

  // Function to validate the URL
  const validateURL = (url) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // Protocol
        "((([a-zA-Z0-9$_.+!*'(),%-]+):([a-zA-Z0-9$_.+!*'(),%-]+)@)?" + // User:pass
        "(([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}|" + // Domain
        "(\\d{1,3}\\.){3}\\d{1,3}))" + // OR IPv4
        "(:\\d+)?(\\/[-a-zA-Z0-9@:%._+~#=]*)*" + // Port and path
        "(\\?[;&a-zA-Z0-9@:%_+.~#?&=]*)?" + // Query string
        "(#[-a-zA-Z0-9@:%._+~#=]*)?$", // Fragment locator
      "i"
    );
    return urlPattern.test(url);
  };

  const addLink = () => {
    if (!newLink.trim()) {
      setError("Link cannot be empty.");
      return;
    }

    if (!validateURL(newLink)) {
      setError("Invalid URL. Please enter a valid link.");
      return;
    }

    setLinks([...links, newLink]);
    setNewLink("");
    setError(""); // Clear error after successful addition
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="add-link-modal">
      <div className="modal-header">
        <h2>Add New Links</h2>
        <button className="close-button" onClick={closeModal}>
          ✖
        </button>
      </div>
      <div className="modal-body">
        <input
          type="text"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          placeholder="Enter new link"
          className="link-input"
        />
        <button onClick={addLink} className="add-button">
          Add Link
        </button>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error */}
        <ul className="links-list">
          {links.map((link, index) => (
            <li key={index} className="link-item">
              <span>{link}</span>
              <button
                onClick={() => removeLink(index)}
                className="remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddLink;
