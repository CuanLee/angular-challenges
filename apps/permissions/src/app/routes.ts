export const APP_ROUTES = [
  {
    path: '',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'enter-admin',
    loadComponent: () =>
      import('./dashboard/admin.component').then(
        (m) => m.AdminDashboardComponent
      ),
  },
  {
    path: 'enter-manager',
    loadComponent: () =>
      import('./dashboard/manager.component').then(
        (m) => m.ManagerDashboardComponent
      ),
  },

  //https://www.youtube.com/watch?v=OpBFhnLlhdE&ab_channel=DecodedFrontend
];
