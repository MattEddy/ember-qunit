export function destroyApp(application) {
  Ember.run(application, 'destroy');
}
