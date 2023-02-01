interface skill{
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
}

interface option{
    hotspot: boolean,
}

const skills : skill = {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]
}

export default skills