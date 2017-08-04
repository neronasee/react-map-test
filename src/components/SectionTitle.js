import React from 'react';

const SectionTitle = (props) => {
  return (
    <div className="text-center" >
      <h2>
        {props.text}
      </h2>
    </div>
  );
};

export default SectionTitle;
