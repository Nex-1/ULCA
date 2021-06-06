var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'device',
	on: {
        pageBeforeIn: function (event, page) {
        },
        pageAfterIn: function (event, page) {
			//device.device_list();	//загрузка учетных записей устройств
        },
        pageInit: function (event, page) {

        },
        pageBeforeRemove: function (event, page) {
        },
      }
  },

  // Components
  {
    //path: '/device/:ip/:name/',
	name: 'add-device',
	path: '/add-device/',
    url: './pages/add-device.html',
  },
   {
	name: 'menu',
	path: '/menu/',
    url: './pages/menu.html',
  },
  {
	name: 'project-name',
	path: '/project-name/',
    url: './pages/project-name.html',
  },  
  {
	name: 'zone-name',
	path: '/zone-name/',
    url: './pages/zone-name.html',
  },
  {
	name: 'sc-name',
	path: '/sc-name/',
    url: './pages/sc-name.html',
  },
  {
	name: 'ch-name',
	path: '/ch-name/',
    url: './pages/ch-name.html',
  },
    {
	name: 'seq-name',
	path: '/seq-name/',
    url: './pages/seq-name.html',
  },
  {
	name: 'zone-patch',
	path: '/zone-patch/',
    url: './pages/zone-patch.html',
  },
    {
	name: 'scene',
	path: '/scene/',
    url: './pages/scene.html',
  },
  {
	name: 'seq-patch',
	path: '/seq-patch/',
    url: './pages/seq-patch.html',
  },
  {
	name: 'seq-scene',
	path: '/seq-scene/',
    url: './pages/seq-scene.html',
  },
  {
	name: 'seq-mode',
	path: '/seq-mode/',
    url: './pages/seq-mode.html',
  },
  {
	name: 'view-zone',
	path: '/view-zone/',
    url: './pages/view-zone.html',
  },
  {
	name: 'timer',
	path: '/timer/',
    url: './pages/timer.html',
  },
  {
	name: 'patch',
	path: '/patch/',
    url: './pages/patch.html',
  },
    {
	name: 'lock',
	path: '/lock/',
    url: './pages/lock.html',
  },
];
