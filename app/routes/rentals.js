import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      {
        name: "hoge",
        city: "TOKYO"
      },
      {
        name: "fuga",
        city: "USA"
      },
      {
        name: "piyo",
        city: "CHINA"
      }
    ];
  }
});
