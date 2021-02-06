import React from 'react';
import { urlFor } from '../../utils/sanity';

const Testimonial = ({ icon, author, position, quote }) => (
  <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
    <div className="h-full text-center">
      <img
        alt="testimonial"
        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
        src={urlFor(icon.asset._ref)}
      />
      <p className="leading-relaxed">{quote}</p>
      <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{author}</h2>
      <p className="text-gray-500">{position}</p>
    </div>
  </div>
);

export const Testimonials = ({ data }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {data.testimonials.map((testy, i) => (
          <Testimonial key={i} {...testy} />
        ))}
      </div>
    </div>
  </section>
);
