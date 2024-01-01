import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!isExpanded);
  };

  const buttonConfig = {
    more: { text: 'Read More', className: 'text-blue-500' },
    less: { text: 'Read Less', className: 'text-red-500' },
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md my-8">
      <h1 className="text-2xl font-semibold mb-4">Article Title</h1>
      <p className={`text-gray-700 ${isExpanded ? 'block' : 'line-clamp-3'}`}>
        {/* Your article content goes here. */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique massa eget
        libero dapibus aliquam. Integer sed mauris a nulla aliquam scelerisque. Sed euismod odio eu
        ex blandit, vitae fermentum nunc luctus. In hac habitasse platea dictumst.
      </p>
      <button
        className={`hover:underline focus:outline-none ${buttonConfig[isExpanded ? 'less' : 'more'].className}`}
        onClick={toggleReadMore}
      >
        {buttonConfig[isExpanded ? 'less' : 'more'].text}
      </button>
    </div>
  );
};

export default About;
