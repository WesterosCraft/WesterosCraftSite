import React from 'react';

const VideoCard = ({ data }) => (
  <div className="p-4 xl:w-1/4 md:w-1/2 w-7/12 mb-12">
    <div className="bg-green-500 h-full rounded-lg mb-6 flex flex-col relative overflow-hidden shadow-xl">
      {/* <video
        loop=""
        muted=""
        playsinline=""
        crossOrigin="anonymous"
        preload="auto"
        style={{ display: 'block', width: '100%' }}>
        <source src={data.videoUrl} type="video/webm; codecs=vp9,vorbis" />
        <track default kind="captions" srcLang="en" src="" />
        Sorry, your browser doesn't support embedded videos.
      </video> */}
    </div>
  </div>
);

export const VideoList = ({ data }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap justify-center">
        {data.videos.map((video, i) => (
          <VideoCard key={i} data={video} />
        ))}
      </div>
    </div>
  </section>
);
