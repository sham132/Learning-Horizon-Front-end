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
            title: 'Admin Panel',
            type: 'group',
            icon: 'icon-group',
            children: [
                
                
                
                {
                    id: 'form-basic',
                    title: 'Questions',
                    type: 'item',
                    url: '/LH/AddQuestions',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'form-basic',
                    title: 'Fee Per Subject',
                    type: 'item',
                    url: '/LH/feePerSubject',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'form-basic',
                    title: 'Generate Fee Voucher',
                    type: 'item',
                    url: '/LH/generateFee',
                    icon: 'feather icon-file-text'
                },
               
                
            ]
        },
      
    ]
}