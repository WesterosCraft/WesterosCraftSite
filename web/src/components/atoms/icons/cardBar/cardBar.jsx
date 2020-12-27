import React from "react";
import { Box } from 'rebass';

export const CardBar = props => (
  <Box as="svg" fill="none" {...props}>
    <path
      d="M0 6.948h77.504v19.68h9.693V184h-1.354V29.367h-8.368v-2.68h-1.32V9.697H0v-2.75zm77.448 130.666V33.453h.846v104.161h-.846zM80.323 0H90.67v22.375H79.646V0h.677zm8.994 2.738H81v16.899h8.317V2.738zm-66.47 22.29h51.298v1.718H22.846v-1.718z"
      fill="#FBC000"
      fillOpacity={0.51}
    />
  </Box>
);