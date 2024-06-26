import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items: MegaMenuItem[] | undefined;
  itemsMenu: MenuItem[] | undefined;;


  ngOnInit() {
      this.itemsMenu = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        }
                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        }
    ];
      this.items = [
          {
              label: 'Videos',
              icon: 'pi pi-fw pi-video',
              items: [
                  [
                      {
                          label: 'Video 1',
                          items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                      },
                      {
                          label: 'Video 2',
                          items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                      }
                  ],
                  [
                      {
                          label: 'Video 3',
                          items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                      },
                      {
                          label: 'Video 4',
                          items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                      }
                  ]
              ]
          },
          {
              label: 'Users',
              icon: 'pi pi-fw pi-users',
              items: [
                  [
                      {
                          label: 'User 1',
                          items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                      },
                      {
                          label: 'User 2',
                          items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                      }
                  ],
                  [
                      {
                          label: 'User 3',
                          items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                      },
                      {
                          label: 'User 4',
                          items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                      }
                  ],
                  [
                      {
                          label: 'User 5',
                          items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                      },
                      {
                          label: 'User 6',
                          items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                      }
                  ]
              ]
          },
          {
              label: 'Events',
              icon: 'pi pi-fw pi-calendar',
              items: [
                  [
                      {
                          label: 'Event 1',
                          items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                      },
                      {
                          label: 'Event 2',
                          items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                      }
                  ],
                  [
                      {
                          label: 'Event 3',
                          items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                      },
                      {
                          label: 'Event 4',
                          items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                      }
                  ]
              ]
          },
          {
              label: 'Settings',
              icon: 'pi pi-fw pi-cog',
              items: [
                  [
                      {
                          label: 'Setting 1',
                          items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                      },
                      {
                          label: 'Setting 2',
                          items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                      },
                      {
                          label: 'Setting 3',
                          items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                      }
                  ],
                  [
                      {
                          label: 'Technology 4',
                          items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                      }
                  ]
              ]
          }
      ];
  }
}
