import Form from './components/form/ImageForm'
import List from './components/list/ImageList'

export const routes = [
    {
        path: '', 
        component: List,
        title: 'List'
    },
    {
        path: '/form', 
        component: Form,
        title: 'Form'
    }
]