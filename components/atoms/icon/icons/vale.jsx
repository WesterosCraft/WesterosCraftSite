import React from 'react';

const Vale = ({ props, color = '#000' }) => (
  <svg fill="none" {...props} viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.422 0c-.777 1.329-1.06 2.83-.664 4.622l.014-.008c.073.244.166.482.284.71l-.545.331a4.969 4.969 0 01-.462-1.347A9.757 9.757 0 00.543 4.23c1.138.369 1.762.862 2.56 1.692C2.208 6.276 1.091 7.018 0 8.466c1.184-.32 2.165-.415 2.986-.228C1.753 9.05.847 10.27.036 12.37c1.2-.625 2.167-.682 3.438-.684-.77 1.186-1.178 2.799-1.213 4.087.82-.942 1.924-2.18 2.912-2.86.1 1.083.501 2.111 1.2 3.086-.008-1.587.342-3.197 1.055-4.829-.348.18-.692.385-1.03.62l-.637.44.164-.8.46-2.231c-.403.011-.813.156-1.268.35l-.753.32.36-.786L6.006 6.28l.56.3-.95 2.077c.383-.113.78-.177 1.202-.103l.327.058-.072.35-.383 1.86a9.42 9.42 0 011.7-.784l.002-.001.022-.007a9.1 9.1 0 01.817-.237c1.44-.394 2.99-.688 5.028-.784.255-.466.46-.877.63-1.258l-.211-.885-.815 1.116-.263-.995-.75 1.057-.252-.945-.796 1.139-.257-1.022-.796 1.14.04-1.491.754-1.544.256 1.022.797-1.138.256 1.02.782-1.086.22.974.815-1.116.262.996.822-1.157c.076-.391.154-.814.247-1.296-1.854-.133-3.55.175-5.145.357-.887-.539-1.958-.796-2.958-.792-.385.002-.76.043-1.109.121L5.422 0zM8.78 3.93c.526.002 1.024.192 1.525.39-.152.518-.437.667-.826.75-.54-.16-.945-.564-1.148-1.094.153-.033.302-.047.449-.047z"
      fill={color}
    />
  </svg>
);

export default Vale;
