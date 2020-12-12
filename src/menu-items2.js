export default {





    items: [
        {
            id: 'navigation',
            title: '',
            type: 'group',
            icon: 'icon-navigation',
            children: [
             
            ]
        },
     
        {
            id: 'ui-forms',
            title: 'Student Portal',
            type: 'group',
            icon: 'icon-group',
            children: [
             
                
                
                {
                    id: 'form-basic',
                    title: 'Search Tutor',
                    type: 'item',
                    url: '/LH/exploreTutor',
                    icon: 'feather icon-file-text'
                },
               
                {
                    id: 'form-basic',
                    title: 'Fee Invoice',
                    type: 'item',
                    url: '/LH/studentFee',
                    icon: 'feather icon-file-text'
                },
                
            ]
        },
      
    ]
}