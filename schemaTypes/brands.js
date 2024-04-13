import {defineField, defineType} from 'sanity'

export const brands = defineType({
  name: 'brands',
  title: 'Brands',
  type: 'document',
  fields: [
    defineField({
      name: 'imgurl',
      title: 'ImagUrl',
      type: 'image',
      options: { 
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})