export default{
    name:'profileImage',
    title:'Profile Image',
    type: 'document',
    fields:[
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        }
    ]
}