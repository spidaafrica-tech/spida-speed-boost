import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Awards', value: 'Awards'},
          {title: 'Impact', value: 'Impact'},
          {title: 'Technology', value: 'Technology'},
          {title: 'Partnerships', value: 'Partnerships'},
          {title: 'News', value: 'News'},
        ],
        layout: 'radio'
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'galleryImages',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      }],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'gradient',
      type: 'string',
      title: 'Gradient Color',
      options: {
        list: [
          {title: 'Yellow to Orange', value: 'from-yellow-500 to-orange-500'},
          {title: 'Green to Emerald', value: 'from-green-500 to-emerald-500'},
          {title: 'Blue to Indigo', value: 'from-blue-500 to-indigo-500'},
          {title: 'Purple to Pink', value: 'from-purple-500 to-pink-500'},
          {title: 'Red to Rose', value: 'from-red-500 to-rose-500'},
        ],
        layout: 'radio'
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featuredImage',
    },
    prepare(selection) {
      const {title, author, media} = selection
      return {
        title,
        subtitle: `by ${author}`,
        media,
      }
    },
  },
})