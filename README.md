# PortHub

Aplicação multipágina com React e TypeScript, visual inspirado no shadcn/ui e build estático para GitHub Pages.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Build e publicação

```sh
npm run build
npm run preview
```

O build gera `dist/` com `index.html`, `about.html` e `form.html`. Publique o conteúdo de `dist/` no GitHub Pages. O Vite usa caminhos relativos para funcionar tanto em domínio próprio quanto em repositórios de projeto.

O tema claro/escuro é compartilhado entre as páginas usando `localStorage`; se o armazenamento estiver indisponível, a alternância continua funcionando na página atual.
