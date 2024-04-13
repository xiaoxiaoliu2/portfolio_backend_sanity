import {defineField, defineType} from 'sanity'

export const works = defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    }),
    defineField({
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    }),
    defineField({
      name: 'imgurl',
      title: 'ImagUrl',
      type: 'image',
      options: { 
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'string',
    }),
  ],
})