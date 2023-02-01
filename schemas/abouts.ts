interface about{
    name: string,
    title: string,
    type: string,
    fields: field[],
}

interface field{
    name: string,
    title: string,
    type: string,
    options?: option
}
interface option{
    hotspot: boolean,
}

const abouts : about = {
    name: 'abouts',
    title: 'Abouts',
    type: 'document',
    fields:[
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
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}

export default abouts