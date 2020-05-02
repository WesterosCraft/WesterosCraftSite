import React from 'react';
import { Button } from '../../atoms/button';
import { Link } from 'gatsby';

export const ButtonSelector = ({ data }) =>
  data.map((button, index) =>
    button.buttonLink ? (
      <Link to={button.buttonLink}>
        <Button variant={button.variant} key={index}>
          {button.buttonText}
        </Button>
      </Link>
    ) : (
      <Button variant={button.variant} key={index}>
        {button.buttonText}
      </Button>
    ),
  );
