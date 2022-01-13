import { useState } from "react";

const Test = () => {
  const [fullName, setName] = useState("Eric Moore");
  const [email, setEmail] = useState("emoore.tech@gmail.com");
  const [dataVisible, setDataVisible] = useState(false);

  const getData = () => {
    // returns data
    if (dataVisible) {
      return (
        <div>
          <h3>{fullName}</h3>
          <h4>{email}</h4>
        </div>
      );
    } else {
      return <label>Click on the button to see my info</label>;
    }
  };

  const handleClick = () => {
    //when user clicks button set dataVisible to true
    setDataVisible(true);
  };

  return (
    <div className="test-page">
      {getData()}

      <button className="btn btn-info" onClick={handleClick}>
        {" "}
        see my info
      </button>
    </div>
  );
};

export default Test;
