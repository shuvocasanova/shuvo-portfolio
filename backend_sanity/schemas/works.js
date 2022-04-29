export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'projectLink',
        title: 'Project Link (Must include https://)',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link (Must include https://)',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
     
    ],
  };