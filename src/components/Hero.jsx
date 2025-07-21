import Spline from '@splinetool/react-spline';
import Loader from './Loader';
import React, { useState } from 'react';

export default function Hero() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader />}
      <Spline 
        scene="https://prod.spline.design/PfkNpgsR5mMe4k4S/scene.splinecode"
        onLoad={() => setLoading(false)}
        style={loading ? { display: 'none' } : {}}
      />
    </>
  );
}
