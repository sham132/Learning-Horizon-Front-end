export default {





    items: [
        {
            id: 'navigation',
            title: '',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
     
        {
            id: 'ui-forms',
            title: 'SMS Aggregator',
            type: 'group',
            icon: 'icon-group',
            children: [
             
                
                
                {
                    id: 'form-basic',
                    title: 'Create Campaign',
                    type: 'item',
                    url: '/Aggr/createCompaign',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'form-basic',
                    title: 'Add Number List',
                    type: 'item',
                    url: '/Aggr/addNumberList',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'form-basic',
                    title: 'Send SMS List',
                    type: 'item',
                    url: '/Aggr/sendSmsList',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'form-basic',
                    title: 'Campaign Lists',
                    type: 'item',
                    url: '/Aggr/CampaignList',
                    icon: 'feather icon-file-text'
                }
                
            ]
        },
      
    ]
}