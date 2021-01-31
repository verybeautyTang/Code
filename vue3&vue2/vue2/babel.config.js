module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      "@babel/env",
      {
        "targets": {
          "edge":"17",
          "firefox":"60",
          "chrome":"80",
          "safari":"11.1"
        },
        "useBuiltIns": "usage"
      }
    ]
  ],
};
