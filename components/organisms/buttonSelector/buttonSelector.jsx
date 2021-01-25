import React from 'react';
import { Button } from '../../atoms/button';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { event } from 'react-ga';

export const ButtonSelector = ({ buttons }) =>
  buttons.map((button, index) => {
    console.log(button)
    if (button.linkType === 'internal') {
      return (
        <Link href={button.link} key={index} passHref>
          <Button as="button" variant={button.variant} download={button.linkType === 'download'}>
            {button.linkText}
          </Button>
        </Link>
      );
    } else if (button.linkType === 'external') {
      return (
        <Button
          as="a"
          variant={button.variant}
          key={index}
          href={button.buttonLink}
          download={button.linkType === 'download'}
          onClick={() => {
            event({
              category: 'Button',
              action: 'Click',
              label: `${button.buttonType}_${button.buttonText}`
            });
          }}>
          {button.linkText}
        </Button>
      );
    } else if (button.linkType === 'scroll') {
      return (
        <ScrollLink to={button.buttonLink} smooth={true} offset={-100} key={index}>
          <Button as="button" variant={button.variant}>
            {button.linkText}
          </Button>
        </ScrollLink>
      );
    } else {
      return <h6 key={index}>needs button type</h6>;
    }
  });
