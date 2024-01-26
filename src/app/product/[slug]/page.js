/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Product({ params }) {
  const slug = params.slug
  return (
    <div>
      <h1>My Page {slug}</h1>
    </div>
  );
}
