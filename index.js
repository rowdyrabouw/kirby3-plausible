panel.plugin("rowdyrabouw/plausible", {
  views: {
    analytics: {
      label: "Analytics",
      icon: "chart",
      component: {
        template: `
          <k-view class="k-todos-view">
            <k-header>Analytics</k-header>
              <strong v-if="!sharedLink">Please make sure rowdyrabouw.plausible.sharedLink is set in config.php.</strong>
              <iframe v-if="sharedLink" plausible-embed :src="sharedLink" scrolling="no" loading="lazy" style="width: 1px; min-width: 100%; height: 1600px;" frameborder="0"></iframe>
          </k-view>
        `,
        data() {
          return {
            sharedLink: "",
          };
        },
        created() {
          this.$api.get("analytics").then((url) => {
            this.sharedLink = url;
          });
        },
      },
    },
  },
});
