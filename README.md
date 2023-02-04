# site-view

## Sobre

Após anos utilizando wordpress como ferramenta para contruir meu site, decidi fazer um site onde aplico os estudos com VueJS e Nuxt.js.

## TODO

### View

- [x] Página inicial com apresentação (simples)
- [x] Área de contato
- [x] Botão telefone com copiar conteudo para clipboard
- [x] Botão email com copiar conteudo para clipboard
- [x] Botão conversa whatsapp
- [ ] Botão de rolagem vertical
- [ ] Animaçao de transição no botão de rolagem vertical
- [x] Deploy no github quando realizar push (com action FTP)
- [x] Página de contato
- [ ] Página de login (salva token em memória)
- [x] Página de posts (lista de posts)
- [x] Página de post (detalhes do post)
- [ ] Blog
- [x] Sistema de carregamento de imagens na mesma pasta do conteúdo Nuxt

### Servidor

https://danielqueiroz.com/api/wp-json/wp/v2/

- Wordpress API https://danielqueiroz.com/site-api/wp-json/wp/v2/posts | https://danielqueiroz.com/api/wp-json/wp/v2/
- [x] api para envio de email via wordpress
- [x] formulário de contato
- [ ] formulário de login

## Exemplos de design

Paralax
https://kuon.space/

Dual-View:
https://designthat.works/

## Build Setup

## Email api

https://signup.mailgun.com/new/signup?diversity_plan=flex_trial
https://app.mailgun.com/app/account/setup

```bash
# Rodar em modo desenvolvimento
$ npm serve
```

## Menu componente

https://vuejsexamples.com/a-beautiful-sidebar-menu-built-with-vue-js/
https://github.com/akahon/vue-sidebar-menu-akahon?ref=vuejsexamples.com

### Menu icons

https://coderthemes.com/minton/layouts/default/icons-boxicons.html

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
