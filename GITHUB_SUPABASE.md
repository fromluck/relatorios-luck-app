# Publicar com GitHub Pages + Supabase

Este é o plano B recomendado para deixar o relatório online com banco de dados.

## Supabase

1. Crie um projeto em `https://supabase.com`.
2. Abra `SQL Editor`.
3. Rode o conteúdo de `supabase-schema.sql`.
4. Vá em `Project Settings` > `API`.
5. Copie:
   - `Project URL`
   - `anon public key`
6. Preencha `config.js`:

```js
window.LUCK_SUPABASE = {
  url: "SUA_PROJECT_URL",
  anonKey: "SUA_ANON_PUBLIC_KEY"
};
```

## GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos para a raiz do repositório:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `config.js`
   - `shared-data.js`
   - pasta `assets`
3. Em `Settings` > `Pages`, publique a branch principal pela raiz do projeto.

## Observação

As políticas atuais permitem que qualquer pessoa com o link do app leia e altere o relatório. Depois podemos adicionar login/senha ou restringir permissões.
