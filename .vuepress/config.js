const sidebar = ['', 'name', 'layout']

for (const locale of Object.keys(locales)) {
  locales[locale].sidebar = { [locale]: sidebar }
}

module.exports = {
  base: "/java-coding-conventions/",
  title: 'Bellerbys Java Coding Conventions ',
  description: 'Java Programming Guide ',
  themeConfig: {
    repo: 'bellerbys/java-coding-conventions',
    editLinks: true,
    lastUpdated: true,
  },
}
