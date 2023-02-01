interface contactInterface{
    name: string,
    title: string,
    type: string,
    fields: field[],
}

interface field{
    name: string,
    title: string,
    type: string,
}

const contact : contactInterface = {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text',
        },
    ]
}

export default contact