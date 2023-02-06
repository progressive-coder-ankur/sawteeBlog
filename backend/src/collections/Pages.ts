import { CollectionConfig } from "payload/types";


const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () =>  true
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'content',
      type: 'richText'
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
  ],
  timestamps: false
}

export default Pages;