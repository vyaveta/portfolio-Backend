interface field{
    name: string,
    title: string,
    type: string,
    options?: option
}

interface option{
    hotspot: boolean
}

interface testimonial{
    name: string,
    title: string,
    type: string,
    fields: field[],
}


const testimonials : testimonial = {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'designation',
            title: 'Designation',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
    ]
}

export default testimonials