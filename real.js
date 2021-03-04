'use strict';

   new Vue({
        el: '#app',
        data: {
            keyword: '',
            users: [
                {
                    id: 1,
                    name: 'マスク',
                    imageUrl:'https://1.bp.blogspot.com/-Jr7_ZBEPLwY/X1CLVG5CXRI/AAAAAAABa7Y/4UDgz3hM8s8OQo7kFRzIj19jWnGLJ1lpACNcBGAsYHQ/s400/mask_megane_kumoru_man.png'
                },
                {
                    id: 2,
                    name: '台風',
                    imageUrl:'https://1.bp.blogspot.com/-i-py5PVRg90/X1CLYtJ0kKI/AAAAAAABa8w/ZQVUcxbCM3cV-uxNLplDvEkUDhzQdmA0wCNcBGAsYHQ/s1600/taifuu_top.png'
                },
                {
                    id: 3,
                    name: '海',
                    imageUrl:'https://2.bp.blogspot.com/-DRb3BnOxdkI/Ut0BGIW0WPI/AAAAAAAAdSc/ElVKsxiY2R8/s800/ocean_night.png'
                },
                {
                    id: 4,
                    name: '車',
                    imageUrl:'https://4.bp.blogspot.com/-qWfxW8_vEh0/V8jqX4RvwEI/AAAAAAAA9d8/ujkTDYhsTik4tDLrlRQ8JUhsZb-AoPMYACLcB/s800/car_lover_man.png'
                },
                {
                    id: 5,
                    name: 'パン',
                    imageUrl:'https://1.bp.blogspot.com/-R9i2_P0Jt_s/XTPn7ZzMmKI/AAAAAAABTug/HoUKiKnTDRQmTGnWqxPUHxLR_m3WAyfRACLcBGAs/s800/bread_syokupan_usui.png'
                },
                 {
                    id: 6,
                    name: '羊',
                    imageUrl:'https://1.bp.blogspot.com/-2h8yYyNWPcQ/X3hF2mFnGjI/AAAAAAABbkU/oAne7S28I7UN3crhUPdDIJDi5SMuzkSAgCNcBGAsYHQ/s1600/animal_hitsuji_horn.png'
                }
            ]
        },
        computed: {
            filteredUsers: function() {

                var users = [];

                for(var i in this.users) {

                    var user = this.users[i];

                    if(user.name.indexOf(this.keyword) !== -1 ||
                        user.imageUrl.indexOf(this.keyword) !== -1) {

                        users.push(user);

                    }

                }

                return users;

            }
        }
    });
