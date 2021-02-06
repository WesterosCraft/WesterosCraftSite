import React from 'react';
import Highlighter from 'react-highlight-words';

export const Hero = ({ data }) => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto px-5 py-24">
      <div className="container w-3/5 px-5 py-24">
        <h2 className="text-gray-900 dark:text-gray-50 font-bold font-heading tracking-wider text-6xl">
          {data.headingLine1}
        </h2>
        <h2 className="text-gray-900 dark:text-gray-50 font-bold font-heading tracking-wider text-6xl pt-3 mb-4">
          {data.headingLine2}
        </h2>
        <h4 className="text-gray-900 dark:text-gray-50 font-medium font-heading tracking-wider text-2xl">
          <Highlighter
            highlightClassName="text-green-700 dark:text-green-500 bg-transparent font-semibold"
            searchWords={['minecraft']}
            autoEscape={true}
            textToHighlight={data.subheading}
          />
        </h4>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-10">
              Get started
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="/"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-800 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <img />
      </div>
    </div>
  </section>
);
