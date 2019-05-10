module.exports = (context, options = {}) => {
  return {
    presets: [
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
