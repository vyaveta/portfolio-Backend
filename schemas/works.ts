interface work{
    name: string,
    title: string,
    type: string,
    fields: field[],
}

interface field{
    name: string,
    title: string,
    type: string,
    options?: option,
    of?: field[],
}

interface option{
    hotspot: boolean
}

const works : work = {
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
            title: 'ProjectLink',
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
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string',
                },
            ]
        },
    ]
}

export default works