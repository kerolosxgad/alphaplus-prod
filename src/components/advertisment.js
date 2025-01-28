import React, { useEffect, useState } from 'react';

const InfiniteTextSlider = ({ messages = []}) => {
 
  return (
    <div class="relative flex overflow-x-hidden bg-green text-white">
      <div class="py-1 animate-marquee whitespace-nowrap">
        <span class="text-sm mx-4">{messages[0]}</span>
        <span class="text-sm mx-4">{messages[0]}</span>
        <span class="text-sm mx-4">{messages[0]}</span>
        <span class="text-sm mx-4">{messages[0]}</span>
      </div>

      <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span class="text-sm mx-4">{messages[1]}</span>
        <span class="text-sm mx-4">{messages[1]}</span>
        <span class="text-sm mx-4">{messages[1]}</span>
        <span class="text-sm mx-4">{messages[1]}</span>
      </div>
    </div>
  );
};

export default InfiniteTextSlider;