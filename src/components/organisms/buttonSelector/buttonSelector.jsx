import React from 'react';
import { Button } from '../../atoms/button';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export const ButtonSelector = ({ data }) =>
  data.map((button, index) => {
    if (button.buttonType === 'internal') {
      return (
        <Link to={button.buttonLink} key={index}>
          <Button as="button" variant={button.variant} download={button.download === 'true'}>
            {button.buttonText}
          </Button>
        </Link>
      );
    } else if (button.buttonType === 'external') {
      return (
        <Button
          as="a"
          variant={button.variant}
          key={index}
          href={button.buttonLink}
          download={button.download === 'true'}
          onClick={() => {
            trackCustomEvent({
              category: 'Button',
              action: 'Click',
              label: `${button.buttonType}_${button.buttonText}`,
            });
          }}
        >
          {button.buttonText}
        </Button>
      );
    } else if (button.buttonType === 'scroll') {
      return (
        <ScrollLink to={button.buttonLink} smooth={true} offset={-100} key={index}>
          <Button as="button" variant={button.variant}>
            {button.buttonText}
          </Button>
        </ScrollLink>
      );
    } else {
      return <h6 key={index}>needs button type</h6>;
    }
  });
