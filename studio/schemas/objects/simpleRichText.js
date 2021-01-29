import { BsTextCenter } from 'react-icons/bs';
import { TextCenteredRender } from '../../../components/atoms/textCenteredRender';

export default {
  name: 'simpleRichText',
  type: 'array',
  title: 'Simple Rich Text',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Title', value: 'title' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {
            title: 'Text center',
            value: 'textCenter',
            blockEditor: {
              icon: BsTextCenter,
              render: TextCenteredRender
            }
          },
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' }
        ]
        // Annotations can be any object structure – e.g. a link or a footnote.
        // annotations: [{ type: 'link' }, { type: 'internalLink' }]
      }
    },
    {
      name: 'figure',
      type: 'object',
      fields: [
        {
          name: 'alt',
          type: 'string'
        },
        {
          name: 'caption',
          type: 'string'
        },
        {
          name: 'image',
          type: 'image'
        }
      ]
    },
    {
      name: 'video',
      type: 'object',
      fields: [
        {
          name: 'url',
          type: 'url'
        }
      ]
    }
  ]
};
